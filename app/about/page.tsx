import { Metadata } from 'next';

export const dynamic = 'force-static'; // not necessary but forces static generation

export const metadata: Metadata = {
  title: 'About Us',
  description: 'all about us',
};

export default function About() {
  return (
    <main>
<<<<<<< HEAD
      <h1 className='text-xl'>About Us</h1>
      <p className='text-sm'>
        NextSpace is a community of developers and designers who are passionate
        about learning and sharing knowledge.
=======
      <h1 className="text-xl">
        Listen - Testing Again - Testing Again - About Us - With CI/CD
      </h1>
      <p className="text-sm">
        CI-CD With Github Actions is now enabled is a community of developers
        and designers who are passionate about learning and sharing knowledge.
>>>>>>> 7a3dee16bca89a06eca62f8e6901c8109a7bb6c3
      </p>
    </main>
  );
}
