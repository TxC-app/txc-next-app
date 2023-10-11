'use client';
import { Icons } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { redirect } from 'next/navigation';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSession, signIn, signOut } from 'next-auth/react';

// const SignInWithGoogle = async () => {
//   const res = await fetch(`/api/auth/signin/google`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const data = await res.json();
//   console.log(data);
//   return data;
// };

export function SignInCard() {
  return (
    <Card>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid grid-cols-1 gap-6'>
          <Button
            onClick={() =>
              signIn('google', { callbackUrl: 'http://localhost:3000/account' })
            }
          >
            <Icons.google className='mr-2 h-4 w-4' />
            Google
          </Button>
          {/* <Link
            href={process.env.NEXT_PUBLIC_GOOGLE_AUTHCODE_URL!}
            className={buttonVariants({ variant: 'outline' })}
          >
            <Icons.google className='mr-2 h-4 w-4' />
            Google
          </Link> */}
        </div>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>
              Or continue with
            </span>
          </div>
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' placeholder='m@example.com' />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='password'>Password</Label>
          <Input id='password' type='password' />
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Create account</Button>
      </CardFooter>
    </Card>
  );
}
