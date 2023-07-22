'use client'
import Link from 'next/link';
import { NextUIProvider } from '@nextui-org/react';
import { useState } from 'react';
import { Card, Spacer, Text, Grid, Input, Button, Container} from '@nextui-org/react';
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';


export default function Home() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	async function getUser() {
			console.log(username);
			console.log(password);
			const userData = {
				username: username,
				password: password
			}
			const JSONdata = JSON.stringify(userData)

			const endpoint = 'http://localhost:3100/api/checkUser'
			console.log(JSONdata);
			const options = {
				// The method is POST because we are sending data.
				method: 'POST',
				// Tell the server we're sending JSON.
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Headers': '*'
				},
				// Body of the request is the JSON data we created above.
				body: JSONdata,
			}
			const response = await fetch(endpoint, options)

			const result = await response.json()
			console.log(result);
			if (result.valid == 200) {
				router.push("/dashboard");
				Cookies.set("logged", 'true', {expires: 1});
				Cookies.set("jwt", result.jwt, {expires: 1});
			} else {
				console.log("Invalid username or password");
			}
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
