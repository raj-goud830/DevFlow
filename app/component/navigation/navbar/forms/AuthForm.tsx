"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, Path, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import ROUTES from "@/constant/route"

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })

interface AuthFormProps<T extends FieldValues> {
    schema: z.ZodType<T>;
    formType: "SIGN_IN" | "SIGN_UP";
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean }>;

}

const AuthForm = ({
    schema,
    formType,
    defaultValues,
    onSubmit,
}: AuthFormProps<T>) => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>
    })

    const handleSubmit: SubmitHandler<T> = async () => { }

    const Buttontext = formType === "SIGN_IN" ? "Sign In" : "Sign Up"

    // // 2. Define a submit handler.
    // function onSubmit(values: z.infer<typeof formSchema>) {
    //     // Do something with the form values.
    //     // ✅ This will be type-safe and validated.
    //     console.log(values)
    // }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-8">
                {Object.keys(defaultValues).map((field) => (
                    <FormField
                        key={field}
                        control={form.control}
                        name={field as Path<T>}
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-2.5">
                                <FormLabel className="paragraph-medium text-dark400_light700">{field.name === "email" ? "Email address" : field.name.charAt(0).toUpperCase() + field.name.slice(1)}</FormLabel>
                                <FormControl>
                                    <Input className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border" required
                                        type={field.name === "password" ? "password" : "text"} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}
                <Button disabled={form.formState.isSubmitting} type="submit" className=" primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-3 py-4 font-inter text-bgdark400_light900 cursor-pointer">
                    {form.formState.isSubmitting ? Buttontext === "Sign In" ? "Signing In..." : "Signing Up..." : Buttontext}

                </Button>

                {formType === "SIGN_IN" ? (
                    <p>
                        Don&apos;t have an account?{" "}
                        <Link
                            href={ROUTES.SIGN_UP}
                            className="paragraph-semibold primary-text-gradient"
                        >
                            Sign up
                        </Link>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <Link
                            href={ROUTES.SIGN_IN}
                            className="paragraph-semibold primary-text-gradient"
                        >
                            Sign in
                        </Link>
                    </p>
                )}
            </form>
        </Form>
    )
}

export default AuthForm