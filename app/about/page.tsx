import { Metadata } from 'next';

export const dynamic = 'force-static'; // not necessary but forces static generation

export const metadata: Metadata = {
  title: 'About Us',
  description: 'all about us',
};

export default function About() {
  return (
    <main>
      <h1 className='text-xl'>About Us</h1>
      <p className='text-sm'>
        NextSpace is a community of developers and designers who are passionate
        about learning and sharing knowledge.
      </p>
    </main>
  );
}
