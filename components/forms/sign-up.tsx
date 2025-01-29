"use client"

import { useActionState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { signUp } from "@/lib/actions/user.actions";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const SignUpForm = () => {
    const [data, action] = useActionState(signUp, {
        succes: false,
        message: ''
    })
     const searchParams = useSearchParams();
        const callbackUrl = searchParams.get('callbackUrl') || '/';
        
    const SignUpButton = () => {
        const {pending} = useFormStatus();
        return (
            <Button disabled={pending} className="w-full" variant="default">
                {pending ? 'Signing up...' : 'Sign Up'}
            </Button>
        )
    }

    return(
        <form action={action}>
            <input type="hidden" name="callbackUrl" value={callbackUrl} />
            <div className="space-y-6">
                <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" id="name" required autoComplete='name' /> 
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" required  autoComplete='email'/> 
            </div>
            <div>
                <Label htmlFor="name">Password</Label>
                <Input type="password" name="password" id="password" required  autoComplete='password'/> 
            </div>
            <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input type="password" name="confirmPassword" id="confirm-password" required autoComplete='confirmPassword' /> 
            </div>
            <div>
                <SignUpButton></SignUpButton>
            </div>
            { data && !data.success && (
                <div className="text-center text-destructive">{data.message}</div>
            )}
             <div className="text-sm text-center text-muted-foreground">
                    Alredy have an account?{' '} 
                    <Link href="/sign-in" className="link">Sign In</Link>
                </div>
            </div>
        </form>
    );
}

export default SignUpForm;