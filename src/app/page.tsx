import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { User } from "./User";
import { LoginButton, LogOutButton } from "./auth";

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
        <main>
            <LoginButton />
            <LogOutButton />
            <h2>Server Session</h2>
            <p>{JSON.stringify(session)}</p>
            <h2>Client Session</h2>
            <User />
        </main>
    );
}
