'use client'
import styles from "./data-display.module.css"

const DataDisplay = (props:any) => {
	return (
	<div className={styles.container}>
		{	props.test.map((value:any) => {
				console.log(value.id)
				return (
						<div className={styles.Info}>
						<Header title={value.id}/>
						<Data value={value.data} />
						</div>
					   )
				})}
			</div>
	);
}

function Header(props:any) {
	return <div className={styles.data}>{props.title}</div>
}

function Data(props:any) {
	return <div className={styles.data}>{props.value}</div>
}

export default DataDisplay
