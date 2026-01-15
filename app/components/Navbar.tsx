import React from 'react'
import { Flex, Heading, Link } from '@radix-ui/themes'
import NextLink from 'next/link'

function Navbar() {
    return (
        <nav>
            <Heading>NAVBAR</Heading>
            <ul>
                <Flex direction='row' className='gap-x-5 '>
                    <li>
                        <Link asChild className='cursor-pointer'>
                            <NextLink href="/">Home</NextLink>
                        </Link>
                    </li>
                    <li>
                        <Link asChild className='cursor-pointer'>
                            <NextLink href="/auth/login">Login</NextLink>
                        </Link>
                    </li>
                    <li>
                        <Link asChild className='cursor-pointer'>
                            <NextLink href="/auth/register">Register</NextLink>
                        </Link>
                    </li>
                    <li>
                        <Link asChild className='cursor-pointer'>
                            <NextLink href="/dashboard">Dashboard</NextLink>
                        </Link>
                    </li>
                </Flex>

            </ul>
        </nav>
    )
}

export default Navbar