'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'About',
    href: '/about',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Products',
    href: '/products',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Account',
    href: '/account',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  //   {
  //     title: "Scroll-area",
  //     href: "/docs/primitives/scroll-area",
  //     description: "Visually or semantically separates content.",
  //   },
  //   {
  //     title: "Tabs",
  //     href: "/docs/primitives/tabs",
  //     description:
  //       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  //   },
  //   {
  //     title: "Tooltip",
  //     href: "/docs/primitives/tooltip",
  //     description:
  //       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  //   },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className='sm:hidden'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <HamburgerMenuIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ' />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-1 h-1/2'>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {/* {component.description} */}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
