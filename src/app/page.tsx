import {options} from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "./components/UserCard"
import Link from "next/link"

export default async function Home() {
  const session = await getServerSession(options)
  return (
   <div className="flex items-center justify-between">
    {session ? 
    <>
      <Link href="/api/auth/signout">Sign out</Link>
      <UserCard user={session?.user!} pageType={"Home"}></UserCard>
    </>
    : <>
        <h1>Home</h1>
        <Link href="/api/auth/signin">Sign in</Link>
      </>}
   </div>
  )
}
