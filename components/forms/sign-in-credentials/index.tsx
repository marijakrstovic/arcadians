"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import { useSearchParams } from "next/navigation";

const SignInCredentialsForm = () => {

    const [data, action] = useActionState(signInWithCredentials, {
        success: false,
        message: ''
    })

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    const SignInButton = () => {
        const {pending} = useFormStatus();
        return (
            <Button disabled={pending} className="w-full" variant="default">
                {pending ? 'Signing in...' : 'Sign In'}
            </Button>
        )
    }

    return(
        <form action={action}>
            <input type="hidden" name="callbackUrl" value={callbackUrl} />
            <div className="space-y-6">
                <div>
                 <Label htmlFor="email">Email</Label>
                 <Input type="email" name="email" id="email" required autoComplete="email" />
                </div>
                <div>
                 <Label htmlFor="password">Password</Label>
                 <Input type="password" name="password" id="password" required autoComplete="password" />
                </div>
                <div>
                 <SignInButton/>
                </div>
                { data && !data.success && (
                    <div className="text-center text-destructive">{data.message}</div>
                )

                }
                <div className="text-sm text-center text-muted-foreground">
                    Do not have an account?{' '} 
                    <Link href="/sign-up" className="link">Sign Up</Link>
                </div>
            </div>
        </form>
    )
}

export default SignInCredentialsForm;