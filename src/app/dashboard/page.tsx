'use client'

import LocationForm from "./form";
import DataDisplay from "./data-display";
export default function DashBoard() {
	interface datatest {
		id: String
		data: String
	}
	var test:datatest[]; 
	test = [{id: "Dist",data: "xxx"}, {id: "Cost",data: "xxx"}, {id: "Stops",data: "xxx"}]
	return (
		<div>
		<h1> Main DashBoard </h1>
		<LocationForm />
		<DataDisplay test={test}/>
		</div>
	);
}
