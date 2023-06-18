'use client'

import { useState } from 'react';

export default function LocationForm() {
	const [location, setLocations] = useState('');
	const [waypoints, setWaypoints] = useState<any[]>([]);
	var nextId = 0;

	const getRoute = async () => {
			const data = {
				route: waypoints
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

	return (
			<div>
			<label htmlFor="waypoint"> Waypoint Entry </label>
			<input type="text" id="location" name="location" value={location} onChange={e => setLocations(e.target.value)} required />

			<button  onClick={() => {
				setWaypoints([...waypoints,
								{ id: nextId++, location: location}
								]);
				}}>Add </button>



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
