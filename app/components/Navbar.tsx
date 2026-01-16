"use client";
import { Container, Flex, Heading, Link } from "@radix-ui/themes";
import NextLink from "next/link";

function Navbar() {
  return (
    <nav className="bg-zinc-950 py-4">
      <Container>
        <Flex justify="between" align="center">
          <NextLink href="/">Navbar</NextLink>
          <ul className="flex gap-x-2">
            <li className="cursor-pointer">
              <Link asChild>
                <NextLink href="/dashboard">Dashboard</NextLink>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link asChild>
                <NextLink href="/auth/login">Login</NextLink>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link asChild>
                <NextLink href="/auth/register">Register</NextLink>
              </Link>
            </li>
          </ul>
        </Flex>
      </Container>
    </nav>
  );
}

export default Navbar;
