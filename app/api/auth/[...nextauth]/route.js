import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@utils/database";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.clientId,
      clientSecret: process.env.clientSecret,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      await connectToDB();
      // check if user exist
      // if not, create a new user
      return true;
    } catch (error) {
      return false;
    }
  },
});

export { handler as GET, handler as POST };
