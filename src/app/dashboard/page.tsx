'use client'

import { useState } from 'react';
import LocationForm from "./form";
import DataDisplay from "./data-display";
import MapDisplay from './map-display';
import { Card, Text, Grid, Navbar, Container} from '@nextui-org/react';
import { useRouter } from 'next/navigation'
import { checkLogin } from '../auth';

export default function DashBoard() {
	interface RouteData {
		id: String
		value: String
	}
	const [query, setQuery] = useState<RouteData[]>([]);
	const [embed, setEmbed] = useState<String>("");
	const router = useRouter();

	if (!checkLogin()) {
		router.push("/");
	}
	return (
			<Container fluid>
		<Navbar isBordered variant="static">
		<Navbar.Brand>
		<Text b> Bingo Fuel </Text>
		</Navbar.Brand>
		<Navbar.Content hideIn="xs">
		<Navbar.Link href="#">User</Navbar.Link>
		<Navbar.Link href="#">Routes</Navbar.Link>
		<Navbar.Link href="#">Bikes</Navbar.Link>
		</Navbar.Content>
		<Navbar.Content>
		<Navbar.Link href="#">Login</Navbar.Link>
		<Navbar.Link href="#">Sign Up</Navbar.Link>
		</Navbar.Content>
		</Navbar>
			<LocationForm setQuery={setQuery} query={query} setEmbed={setEmbed}/>
			<Grid.Container gap={15} justify='center'>
				<Grid>
				<DataDisplay query={query}/>
				</Grid>
				<Grid>
				<MapDisplay embed={embed} />
				</Grid>
			</Grid.Container>
		</Container>
	);
}
