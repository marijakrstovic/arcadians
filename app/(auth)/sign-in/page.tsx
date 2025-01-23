import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SignInForm from "@/components/forms/sign-in";

export const metadata: Metadata = {
    title: 'Sign In'
}

const SignInPage = () => {
    return (
        <div className="w-full mx-auto max-w-md ">
            <Card>
                <CardHeader className="space-y-4">
                    <Link href="/" className="flex-center">
                        <Image src="/images/logo.svg" width={100} height={100} alt={APP_NAME} />
                    </Link>
                    <CardTitle className="text-center">
                        Sign In
                    </CardTitle>
                    <CardDescription className="text-center">
                        Signn in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <SignInForm></SignInForm>
                </CardContent>
            </Card>
        </div>
    )
}

export default SignInPage;