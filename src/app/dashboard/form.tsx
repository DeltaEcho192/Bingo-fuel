'use client'

import { useState } from 'react';
import GoogleMaps from './autocomplete';
import { Button } from "@nextui-org/react";
import { Container, Card,Col, Row, Grid, Text, Table } from "@nextui-org/react";


interface MainTextMatchedSubstrings {
  offset: number;
  length: number;
}
interface StructuredFormatting {
  main_text: string;
  secondary_text: string;
  main_text_matched_substrings?: readonly MainTextMatchedSubstrings[];
}
interface PlaceType {
  description: string;
  place_id: string;
  structured_formatting: StructuredFormatting;
}

var nextId = 0;

export default function LocationForm(props:any) {
	const [waypoints, setWaypoints] = useState<any[]>([]);


	const getRoute = async () => {
			const data = {
				route: waypoints.map(waypoint => waypoint.place_id) 
			}
			const JSONdata = JSON.stringify(data)

			const endpoint = 'http://localhost:3100/api/route'
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
			console.log(result)

			// How to add data to data comp
			props.setQuery(result.data);
			props.setEmbed(result.embed_url);
		//	alert(`First waypoint is ${result.firstWaypoint}`)
	}

	const handleCallback = (childLocation:PlaceType) => {
		console.log(childLocation);
		setWaypoints([...waypoints,
				{ id: nextId++, location: childLocation.description, place_id: childLocation.place_id}
		]);
	};

	return (
			<Grid.Container gap={2} justify="center">
			<Grid xs={4}>
				<Container>
				<Row gap={1}>
				<Col>
				<GoogleMaps parentCallback={handleCallback}/>
				</Col>
				<Col>
				<Button auto onClick={getRoute}>Get Route</Button>
				</Col>
				</Row>
				</Container>
			</Grid>
			<Grid xs={4}>
				<Container>
				<Table
				aria-label="Example table with dynamic content"
				css={{
					height: "auto",
					minWidth: "100%",
				}}>
				<Table.Header>
					<Table.Column> Waypoint </Table.Column>
				</Table.Header>
				<Table.Body items={waypoints}>
					{(item) => (
						console.log(item),
						<Table.Row key={item.id}>
							<Table.Cell>{item.location}</Table.Cell>
						</Table.Row>
				)}	
				</Table.Body>
				</Table>
				
				</Container>
			</Grid>
			</Grid.Container>
	)
}
