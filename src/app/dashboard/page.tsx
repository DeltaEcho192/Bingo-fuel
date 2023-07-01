'use client'

import { useState } from 'react';
import LocationForm from "./form";
import DataDisplay from "./data-display";
import MapDisplay from './map-display';

export default function DashBoard() {
	interface RouteData {
		id: String
		value: String
	}
	const [query, setQuery] = useState<RouteData[]>([]);
	const [embed, setEmbed] = useState<String>("");
	return (
		<div>
		<h1> Main DashBoard </h1>
		<LocationForm setQuery={setQuery} query={query} setEmbed={setEmbed}/>
		<DataDisplay query={query}/>
		<MapDisplay embed={embed} />
		</div>
	);
}
