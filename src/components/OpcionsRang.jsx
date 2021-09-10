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
	
	state = {
		dataInici2: '15/09/2021',
		dataFinal2: '22/06/2022'
	}

	methodToOnChange = (event) => {
		this.setState({ [event.target.name] : event.target.value })		
	}

	guardar = () => { this.props.guardarDates( this.state.dataInici2, this.state.dataFinal2 ) }


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
