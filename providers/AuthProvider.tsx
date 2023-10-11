'use client';

import { SessionProvider } from 'next-auth/react';

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  // 1
  return <SessionProvider>{children}</SessionProvider>;
}
