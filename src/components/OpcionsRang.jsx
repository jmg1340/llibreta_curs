import React, { Component, useState } from "react";
import { Grid, TextField, makeStyles, withStyles } from "@material-ui/core"


// const useStyles = makeStyles((theme) => ({
// 	clOpcionsR: {
// 		'& > *': {
// 			margin: theme.spacing(2),
// 			// width: '25ch',
// 		},
// 		border: '1px solid black',
// 		marginBottom: '5ch'
// 	},
	
// }));
	

const styles = (theme) => ({
	clOpcionsR: {
		'& > *': {
			margin: theme.spacing(2),
			// width: '25ch',
		},
		border: '1px solid black',
		marginBottom: '5ch'
	},
	
});
	






class OpcionsRang extends Component  {
  // classes = useStyles();


	// [dataInici2, setDataInici2] = useState('')
	// [dataFinal2, setDataFinal2] = useState('')
	
	
	state = {
		dataInici2: '',
		dataFinal2: ''
	}

	methodToOnChange = (event) => {
		console.log( { [event.target.name] : event.target.value } )
		// switch (event.target.name) {
		// 	case "dataInici2": setDataInici2(event.target.value); break;
		// 	case "dataFinal2": setDataFinal2( event.target.value); break
		// }
		new Promise ((resolve, reject) => {
			this.setState({ [event.target.name] : event.target.value })
			resolve()
		}).then ( () => {
			console.log(`STATE: dataInici2 : ${this.state.dataInici2}`, `STATE: dataFinal2 : ${this.state.dataFinal2}`)
			// this.props.guardarDates( this.state.dataInici2, this.state.dataFinal2 )
		})
		
	}

	guardar = () => { this.props.guardarDates( this.state.dataInici2, this.state.dataFinal2 ) }

	// console.log(props)
	// console.log(props.guardarDates())
	render() {
		const { classes } = this.props;
		return (
			<Grid
				container
				spacing={2}
				direction="row"
				justifyContent="center"
				alignItems="center"
				wrap="nowrap"
				className={ classes.clOpcionsR }
				
			>
				
			
					<TextField 
						name="dataInici2" 
						label="Data inicial curs" 
						variant="outlined"
						size="small" 
						InputLabelProps={{
								shrink: true,
						}}
						value={this.dataInici2}
						onChange={this.methodToOnChange}

					/>
					<TextField 
						name="dataFinal2" 
						label="Data final curs" 
						variant="outlined"
						size="small" 
						InputLabelProps={{
								shrink: true,
						}}
						value={this.dataFinal2}
						onChange={this.methodToOnChange}
					/>   
			
			
			
			</Grid>			
		)
	}
}


export default withStyles(styles)(OpcionsRang)
