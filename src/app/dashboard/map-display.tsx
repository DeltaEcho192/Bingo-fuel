'use client'

const MapDisplay = (props:any) => {
	return (
			<div>
			<iframe src={props.embed}></iframe>
			</div>
	);
}

export default MapDisplay
