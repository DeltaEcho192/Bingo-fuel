'use client'

const MapDisplay = (props:any) => {
	return (
			<iframe width="500" height="600" src={props.embed}></iframe>
	);
}

export default MapDisplay
