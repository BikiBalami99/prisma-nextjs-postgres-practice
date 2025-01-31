import Image from "next/image";
import { prisma } from "../../lib/prisma";

export default async function Home() {
    const user = await prisma.user.findFirst({
        where: { email: "test@test.com" },
    });
    return (
        <main>
            <h1>Hello {user?.name}</h1>
        </main>
    );
}
