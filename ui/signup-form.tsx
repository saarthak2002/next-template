import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link';

import { createNewUser } from '@/app/lib/actions';

export default function SignupForm() {
    return (
        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden py-0">
            <CardContent className="grid p-0 md:grid-cols-2">
              <form action={createNewUser} className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">Hello Explorer</h1>
                    <p className="text-balance text-muted-foreground">
                      Create your App account
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" placeholder="Create a new password" required />
                  </div>
                  <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
                    Already have an account? <Link href="/login">Login</Link>
                  </div>
                  <Button type="submit" className="w-full">
                    Register
                  </Button>
                </div>
              </form>
              <div className="relative hidden bg-muted md:block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Spiny_Forest_Ifaty_Madagascar.jpg"
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
              </div>
            </CardContent>
          </Card>
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
            and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      )
}