"use client";

import { useSession } from "next-auth/react"

export default function Profile() {
  const session = useSession();

  // Unlike the session from auth(), this session is always defined,
  //  but returns a different object
  if (session.data?.user) {
    return <pre>From client: {JSON.stringify(session.data.user, null, 2)}</pre>
  }

  return <div>From client: user is NOT signed in</div>
}