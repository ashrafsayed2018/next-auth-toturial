import Image from 'next/image'
import React from 'react'
type Props = {
  user:{
    name?: string |undefined|null,
    email?: string |undefined|null,
    image?: string |undefined|null,
  },
  pageType: string
}


export default function UserCard({user,pageType}:Props) {
  console.log(user)
  return (
    <div>
       <h1>{user.name}</h1>
       <Image src={user?.image!} 
       width={100} 
       height={100}
       alt="user image" />
       <h2>{user?.email}</h2>
    </div>
  )
}
