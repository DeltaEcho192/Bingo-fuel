'use client'

import { useState } from 'react';
import LocationForm from "./form";
import DataDisplay from "./data-display";

export default function DashBoard() {
	interface RouteData {
		id: String
		data: String
	}
	const [query, setQuery] = useState<RouteData[]>([]);
	return (
		<div>
		<h1> Main DashBoard </h1>
		<LocationForm setQuery={setQuery} query={query}/>
		<DataDisplay query={query}/>
		</div>
	);
}
