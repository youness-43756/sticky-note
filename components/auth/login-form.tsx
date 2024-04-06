"use client"
import CardWrapper from "./card-wrapper"
import { loginSchema } from "@/schema"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";


export default function LoginForm() {
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "", password: ""
        }

    })
    const onsubmit = (data: z.infer<typeof loginSchema>) => {
        console.log(data)
    }
    return (
        <CardWrapper
            title="Login"
            backButtonHref="/auth/register"
            backButtonLabel="Don't have an account? Create one!"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-4">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" {...field} placeholder="johndoe@email.com" />
                                    </FormControl>
                                    {/* //* Show the message in login schema */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" {...field} placeholder="******" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button variant="submit" type="submit" size="full">Submit</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}
