'use server'

import { signInFormSchema, signUpFormSchema } from "../validators";
import {signIn, signOut} from '@/auth';
import { prisma } from "@/db/prisma";
import { hashSync } from "bcrypt-ts-edge";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { formatError } from "../utils";

//sign in the user with crtedentials
export async function signInWithCredentials(prevState: unknown, formData: FormData){
    try {
        const user = signInFormSchema.parse({
            email: formData.get('email'),
            password: formData.get('password')
        });
        await signIn('credentials', user);
        return {success: true, message: 'Signed in sucessfully'}
    } catch(error) {
        if(isRedirectError(error)){
            throw error;
        }
        return {success: false, message: 'Invalid email or password'}
    }

}

export async function signOutUser() {
    await signOut();
}

export async function signUp(prevState: unknown, formData: FormData){
    try{
        const user = signUpFormSchema.parse({
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword')
        });

        const plainPassword = user.password;
        user.password = hashSync(user.password, 10);

        await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password
            }
        });
        await signIn('credentials', {
            email: user.email,
            password: plainPassword
        });

        return {succes: true, message: "You are signed up sucessfully"}

    } catch (error) {
        if(isRedirectError(error)){
            throw error;
        }
        return {success: false, message: formatError(error)}
    }

}