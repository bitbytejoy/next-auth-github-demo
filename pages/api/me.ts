import type {NextApiRequest, NextApiResponse} from 'next'
import {getServerSession} from "next-auth";
import {authOptions} from "./auth/[...nextauth]";

type Data = {
  email: string|null|undefined
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    res.status(200).json({ email: session.user?.email});
  } else {
    res.status(401).end();
  }
}
