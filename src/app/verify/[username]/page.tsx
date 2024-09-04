"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { useToast } from '@/hooks/use-toast'
import { verifySchema } from '@/schemas/verifySchema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import { Loader2 } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"

function VerifyAccount() {
  const params = useParams<{username: string}>();
  const router = useRouter();
  const {toast} = useToast();
  const form = useForm<z.infer<typeof verifySchema>>({
    resolver: zodResolver(verifySchema)
  })
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async(data : z.infer<typeof verifySchema>) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/verify-code', {
        username: params.username,
        code: data.code
      })
      toast({
        title: "Success",
        description: response.data.message
      })
      router.replace('/');
    } catch (error) {
      const axiosError = error as AxiosError<any>;
      toast({
        title: "Error",
        description: axiosError.response?.data.message ?? "An error occurred. Please try again.",
        variant: "destructive"
      })
    }
    finally{
      setIsSubmitting(false)
    }
    
  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-8 flex justify-center items-center flex-col space-y-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className=' flex justify-center items-center flex-col'>
                <FormLabel>One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <Button type="submit">
            {isSubmitting ? (
              <Loader2 className='animate-spin'/>
            ) : ("Verify")}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default VerifyAccount