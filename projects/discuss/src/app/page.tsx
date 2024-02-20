import { Button } from "@nextui-org/react";

import { auth } from "@/auth";
import * as actions from "@/actions";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth(); // may be null if the user is not signed in

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign in</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit">Sign out</Button>
      </form>

      {
        session?.user ? (
          <pre>{JSON.stringify(session.user, null, 2)}</pre>
        ) : (
          <div>Signed out</div>
        )
      }

      <Profile />
    </div>
  );
}
