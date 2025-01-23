"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const SignInForm = () => {
    return(
        <form>
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
                 <Button variant="default" className="w-full">Sign In</Button>
                </div>
            </div>
        </form>
    )
}

export default SignInForm;