'use client'
import Link from 'next/link';
import { NextUIProvider } from '@nextui-org/react';
import { useState } from 'react';
import { Card, Spacer, Text, Grid, Input, Button, Container} from '@nextui-org/react';


export default function Home() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	async function getUser() {
			console.log(username);
			console.log(password);
	}
  return (
    <NextUIProvider>
      <Container fluid>
		<h1> Login Page </h1>
		<Link href="/dashboard"> Dashboard </Link>
		<Card>
			<Card.Body>
				<Input
					value={username}
					onChange={e => { setUsername(e.currentTarget.value); }}
					label="Username"/>
				<Input.Password 
					value={password} 
					onChange ={e => { setPassword(e.currentTarget.value);}}
					id="password" label="Password"/>
				<Spacer y={1.6} />
				<Button onClick={getUser}>Login</Button>
			</Card.Body>
		</Card>
      </Container>
    </NextUIProvider>
  )
}
