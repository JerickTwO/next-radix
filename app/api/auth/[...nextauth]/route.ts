import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const { email, password } = credentials as { email: string; password: string };

        const userFound = await prisma.user.findUniqueOrThrow({
          where: {
            email,
          },
        });
        if (!userFound) throw new Error("Invalid credentials");

        const validPassword = await bcrypt.compare(password, userFound.password);
        console.log(validPassword);
        if (!validPassword) throw new Error("Invalid credentials");

        return {
          id: userFound.id.toString(),
          name: userFound.name,
          email: userFound.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});
export { handler as GET, handler as POST };
