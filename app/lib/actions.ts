'use server';

export async function createNewUser(formData: FormData) {
    const rawFromData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    };
    console.log(rawFromData);
}