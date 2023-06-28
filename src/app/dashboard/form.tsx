'use client'

import { useState } from 'react';
import GoogleMaps from './autocomplete';
import { Google } from '@mui/icons-material';


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

export default function LocationForm() {
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
			alert(`First waypoint is ${result.firstWaypoint}`)
	}

	const handleCallback = (childLocation:PlaceType) => {
		setWaypoints([...waypoints,
				{ id: nextId++, location: childLocation.description, place_id: childLocation.place_id}
		]);
	};

	return (
			<div>
			<label htmlFor="waypoint"> Waypoint Entry </label>
			<GoogleMaps parentCallback={handleCallback}/>
			<h3> Waypoints </h3>
			<ul>
			{waypoints.map(waypoint =>(
						<li key={waypoint.id}>{waypoint.location}</li>
						))}
			</ul>
			<button onClick={getRoute}>Get Route </button>
			</div>
	)
}
