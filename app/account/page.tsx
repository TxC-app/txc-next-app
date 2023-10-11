import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Separator } from '@/components/ui/separator';

import { AccountForm } from '@/app/account/AccountForm';

// export const dynamic = 'force-static'; not necessary but forces static generation

export const metadata: Metadata = {
  title: 'Account Page',
  description: 'Account Page',
};

export default async function Account() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    redirect('/signin');
  }

  return (
    <div className='flex flex-col space-y-6 p-4'>
      <div>
        <h3 className='text-lg font-medium'>Account</h3>
        <p className='text-sm text-muted-foreground'>
          Update your account settings.
        </p>
        <Separator className='my-6' />
        <AccountForm />
      </div>
    </div>
  );
}
