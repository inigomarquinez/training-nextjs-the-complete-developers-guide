import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import HeaderAuth from '@/components/header-auth';
// import { auth } from '@/auth';

export default async function Header() {
  // This auth function makes use of cookies and the Header is used in every page,
  // so this turns out all the pages to be dynamic at build time.
  // TO avoid this and make it static, we'll create a header-auth client component
  // and manage the auth there.
  // const session = await auth();

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
