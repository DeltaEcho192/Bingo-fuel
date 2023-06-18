'use client'

import { useState } from 'react';

export default function LocationForm() {
	const [location, setLocations] = useState('');
	const [waypoints, setWaypoints] = useState<any[]>([]);
	var nextId = 0;

	return (
			<div>
			<label htmlFor="waypoint"> Waypoint Entry </label>
			<input type="text" id="location" name="location" value={location} onChange={e => setLocations(e.target.value)} required />

			<button  onClick={() => {
				setWaypoints([...waypoints,
								{ id: nextId++, location: location}
								]);
				}}>Add </button>



			<h1> Waypoints </h1>
			<ul>
			{waypoints.map(waypoint =>(
						<li key={waypoint.id}>{waypoint.location}</li>
						))}
			</ul>
			</div>
	)
}


