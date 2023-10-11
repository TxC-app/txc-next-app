'use client';

import { useSession } from 'next-auth/react';

export default function ClientComponent() {
  const { data: session, status } = useSession();

  return (
    <>
      {session && status === 'authenticated' && (
        <div>{JSON.stringify(session)}</div>
      )}
      <h3>{`${status}`}</h3>
    </>
  );
}
