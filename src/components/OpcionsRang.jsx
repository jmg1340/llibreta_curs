import React, { Component, useState } from "react";
import { Grid, TextField, Box, withStyles } from "@material-ui/core"
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import moment from "moment"
import MomentUtils from "@date-io/moment";


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


	container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
	
});
	






class OpcionsRang extends Component  {
	constructor (props) {
		super(props)
		this.state = {
			dataInici2: '',
			dataFinal2: '',

			value: null
		}	
	}

	componentDidMount = () => {
		console.log("estic a componentDidMount")

    let vdataInici2 = JSON.parse(localStorage.getItem("dataInici2"));
    if (vdataInici2) {
      this.setState({ dataInici2 : vdataInici2 });
    }
    let vdataFinal2 = JSON.parse(localStorage.getItem("dataFinal2"));
    if (vdataFinal2) {
      this.setState({ dataFinal2 : vdataFinal2 });
    }

		// this.setState({ dataInici2 : localStorage.getItem('dataInici2') || '' })
		// this.setState({ dataFinal2 : localStorage.getItem('dataFinal2') || '' })
	}


	// componentDidUpdate = () => {
	// 	console.log("estic a componentDidUpdate")
	// 	this.setState({ dataInici2 : localStorage.getItem('dataInici2') || '' })
	// 	this.setState({ dataFinal2 : localStorage.getItem('dataFinal2') || '' })
	// }


	methodToOnChange = (event) => {
		// el format arriba YYYY-MM-DD
		// const txtData = event.target.value
		// console.log("txtData: " + new Date (txtData))
		// const { year, mes, dia } = txtData.split("-")
		// console.log("year: " + year, "mes: " + mes, "dia: " + dia)

		localStorage.setItem(event.target.name,  JSON.stringify(event.target.value));
		// localStorage.setItem(event.target.name, JSON.stringify(txtData));

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

{/* 
				<MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
					<DatePicker 
						name="dataInici2" 
						label="Data primer dia"
						defaultValue={this.dataInici2}
						openTo="year"
						views={["year", "month", "day"]}
						formatDate='DD-MM-YYYY' 
						variant="outlined"
						size="small" 
						InputLabelProps={{
								shrink: true,
						}}
						value={this.dataInici2}
						onChange={this.methodToOnChange}
					/>
				</MuiPickersUtilsProvider>
*/}



				<TextField 
					name="dataInici2" 
					label="Data primer dia"
					type="date"
					defaultValue={this.dataInici2}
					views={["day", "month", "year"]}
					format='DD-MM-YYYY' 
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
					label="Data últim dia" 
					type="date"
					defaultValue={this.dataFinal2}
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
