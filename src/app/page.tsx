import Link from 'next/link';
import { NextUIProvider } from '@nextui-org/react';



export default function Home() {
  return (
    <NextUIProvider>
      <div >
		<h1> Login Page </h1>
		<Link href="/dashboard"> Dashboard </Link>
      </div>
    </NextUIProvider>
  )
}
