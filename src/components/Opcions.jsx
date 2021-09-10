import React, { Component, useState } from 'react';
import { Button, makeStyles, withStyles } from '@material-ui/core';

import OpcionsRang from "./OpcionsRang.jsx"
import OpcionsFestius from "./OpcionsFestius.jsx"
import OpcionsHoraris from "./OpcionsHoraris.jsx"

// const useStyles = makeStyles((theme) => ({
const styles = (theme) => ({
	root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch'
    },
  },
});



class Opcions extends Component {
  // const classes = useStyles();


	state = {
		dataInici : '',
		dataFinal : '',
		festius: [],
		horaris: {}
	}



	guardarDates = (vDataInici, vDataFinal) => {
		console.log("modificant data inici...")
		console.log(`vDataInici: ${vDataInici}`, `vDataFinal: ${vDataFinal}`)
		this.setState({dataInici: vDataInici})
		this.setState({dataFinal: vDataFinal})
	}

	guardarFestius = (vFestius) => {
		this.setState({festius: vFestius})
	}

	guardarHoraris = (vHoraris) => {
		this.setState({horaris: vHoraris})
	}


	OpcsRng = React.createRef()
	OpcsFsts = React.createRef()
	OpcsHrs = React.createRef()

	generarPDF = (event) => {
		event.preventDefault()

		this.OpcsRng.current.guardar()
		this.OpcsFsts.current.guardar()
		this.OpcsHrs.current.guardar()
		
	}


	render () {
		const { classes } = this.props;

		return (
			
			<form className={classes.root} noValidate autoComplete="off" onSubmit={this.generarPDF}>
				<OpcionsRang ref={this.OpcsRng}  guardarDates={ this.guardarDates }/>
				<OpcionsFestius ref={this.OpcsFsts}  guardarFestius={ this.guardarFestius }/>
				<OpcionsHoraris ref={this.OpcsHrs} guardarHoraris={ this.guardarHoraris } />

				<Button type="submit" color="primary" variant="contained" onSubmit={this.generarPDF}>Generar...</Button>
			</form>


		);		
	}

}

export default withStyles(styles)(Opcions)
