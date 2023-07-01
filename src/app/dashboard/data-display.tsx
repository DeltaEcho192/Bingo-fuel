'use client'
import { Card, Text, Grid} from '@nextui-org/react';

const DataDisplay = (props:any) => {
	return (
			<Grid.Container gap={1} justify="center">
				{props.query.map((value:any) => {
					console.log(value.id);
					return (<Grid xs={1}>
					<CardData title={value.id} value={value.value}/>
					</Grid>)
					})
				}
			</Grid.Container>
	);
}

function CardData(props:any) {
	console.log(props.title)
	return (
		<Card css={{ mw: "200px" }}>
			<Card.Header>
				<Text b>{props.title}</Text>
			</Card.Header>
			<Card.Divider/>
			<Card.Body css={{ py: "$10" }}>
				<Text>{props.value}</Text>
			</Card.Body>
		</Card>
	)
}

export default DataDisplay
