'use server';

import postgres from "postgres";
import bcrypt from 'bcrypt';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function createUser(prevState: string | undefined, formData: FormData) {
    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    };
    const parsedCredentials = z
        .object({ name: z.string(), email: z.string().email(), password: z.string().min(6) })
        .safeParse(rawFormData);
    if (parsedCredentials.success) {
        const { name, email, password } = parsedCredentials.data;
        try {
            const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
            console.log(user);
            if (user.length !== 0) {
                console.log("A user with this email already exists.");
                return "A user with this email already exists.";
            } else {
                const hashedPassword = await bcrypt.hash(password, 10);;
                await sql`
                    INSERT INTO users (name, email, password)
                    VALUES (${name}, ${email}, ${hashedPassword})
                `
                console.log("User Added!");
                console.log({name, email, hashedPassword})
            }
        } catch (error) {
            console.log("Failed to fetch user:", error);
            throw new Error("Failed to fecth user.");
        }
        redirect('/login?signup=true');
    } else {
        console.log("There was a validation error");
        return "There was a validation error.";
    }
    
}