import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const providers = [];

const githubProvider = (
  process.env.GITHUB_ID &&
  process.env.GITHUB_SECRET &&
  GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  })
);
if (githubProvider) {
  providers.push(githubProvider);
}

export const authOptions = {
  secret: process.env.SECRET,
  providers
}
export default NextAuth(authOptions)