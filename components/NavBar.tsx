import { ModeToggle } from '@/components/ui/mode-toggle';
import { NavMenu } from '@/components/NavMenu';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
// import { Button } from "@/components/ui/button";
import { CubeIcon } from '@radix-ui/react-icons';

import MobileNavBar from '@/components/MobileNavBar'; // import the MobileNavBar component
export function NavBar() {
  return (
    <div className='p-5 flex flex-row justify-between border border-color-black w-full'>
      <div className='flex'>
        <Link href='/' className={buttonVariants({ variant: 'outline' })}>
          <CubeIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ' />
        </Link>
      </div>

      <div className='flex flex-row gap-5'>
        <NavMenu />

        <ModeToggle />
        <MobileNavBar />
      </div>
    </div>
  );
}
