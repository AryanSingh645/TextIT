"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {signIn} from "next-auth/react"
import {Loader2} from "lucide-react"
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { signInSchema } from "@/schemas/signInSchema";
import axios from "axios";

export default function Signup() {

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues:{
      identifier: "",
      password: ""
    }
  });
  const {toast} = useToast();
  const router = useRouter();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  const handleSubmitFunction = async(data : z.infer<typeof signInSchema>) => {
    setIsSubmitting(true);
    const response = await signIn('credentials',
      {
        redirect: false,
        identifier: data.identifier,
        password: data.password,
      },
    );
    console.log(response,"inside signin");
      if(response?.error){
        toast({
            title: 'Error',
            description: "Invalid Credentials",
            variant: "destructive"
        })
    }
    if(response?.url){
        const res = await axios.post("/api/getUserId", {
          
        })
        router.replace('/');
    }
    setIsSubmitting(false);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      {/* <BackgroundBeams className="z-0 "/> */}
      <div className="max-w-md w-full mt-[5.5rem] mx-auto rounded-2xl p-4 md:px-8 md:pb-12 md:pt-6 shadow-input bg-white dark:bg-black flex flex-col">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                  TextIT
              </span>
          </h2>

          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Join our community and start connecting instantly!
          </p>

          <Form {...form}>
              <form
                  className="mt-8 z-10"
                  onSubmit={form.handleSubmit(handleSubmitFunction)}
              >
                  <FormField
                    control={form.control}
                    name="identifier"
                    render={({ field }) => (
                      <FormItem>
                        <LabelInputContainer className="mb-4">
                          <FormLabel>Email / Username</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="abc@example.com"
                              {...field}
                            />
                          </FormControl>
                        </LabelInputContainer>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <LabelInputContainer className="mb-4">
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="••••••••"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                        </LabelInputContainer>
                      </FormItem>
                    )}
                  />
                  <Button
                      className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                      type="submit"
                  >
                      {isSubmitting ? (
                          <Loader2 className="animate-spin mx-auto" />
                      ) : (
                          `Sign in `
                      )}
                      <BottomGradient />
                  </Button>
              </form>
          </Form>
          <div className="bg-gradient-to-r z-10 from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col z-10 space-y-4">
              <button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="submit"
                  onClick={() => {signIn("github")}}
              >
                  <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      GitHub
                  </span>
                  <BottomGradient />
              </button>
              <button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="submit"
                  onClick={() => {signIn("google")}}
              >
                  <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                      Google
                  </span>
                  <BottomGradient />
              </button>
          </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
