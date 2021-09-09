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



	// const [dataInici, setDataInici] = useState('')
	// const [dataFinal, setDataFinal] = useState('')

	// const [festius, setFestius] = useState([
	// 	"11/9", "12/10", "11/1", "6/12", "8/12", "1/5", "24/6"
	// ])

	// const [horaris, setHoraris] = useState({
	// 	Dll: [
	// 		{hora1: 'h1', materia1: 'DllM1'},
	// 		{hora2: 'h2', materia2: 'DllM2'},
	// 		{hora3: 'h3', materia3: 'DllM3'},
	// 		{hora4: 'h4', materia4: 'DllM4'},
	// 		{hora5: 'h5', materia5: 'DllM5'},
	// 		{hora6: 'h6', materia6: 'DllM6'},
	// 		{hora7: 'h7', materia7: 'DllM7'},
	// 		{hora8: 'h8', materia8: 'DllM8'},
	// 	],
	// 	Dm:  [
	// 		{hora1: 'h1', materia1: 'DmM1'},
	// 		{hora2: 'h2', materia2: 'DmM2'},
	// 		{hora3: 'h3', materia3: 'DmM3'},
	// 		{hora4: 'h4', materia4: 'DmM4'},
	// 		{hora5: 'h5', materia5: 'DmM5'},
	// 		{hora6: 'h6', materia6: 'DmM6'},
	// 		{hora7: 'h7', materia7: 'DmM7'},
	// 		{hora8: 'h8', materia8: 'DmM8'},
	// 	],
	// 	Dcr: [
	// 		{hora1: 'h1', materia1: 'DcrM1'},
	// 		{hora2: 'h2', materia2: 'DcrM2'},
	// 		{hora3: 'h3', materia3: 'DcrM3'},
	// 		{hora4: 'h4', materia4: 'DcrM4'},
	// 		{hora5: 'h5', materia5: 'DcrM5'},
	// 		{hora6: 'h6', materia6: 'DcrM6'},
	// 		{hora7: 'h7', materia7: 'DcrM7'},
	// 		{hora8: 'h8', materia8: 'DcrM8'},
	// 	],
	// 	Dj:  [
	// 		{hora1: 'h1', materia1: 'DjM1'},
	// 		{hora2: 'h2', materia2: 'DjM2'},
	// 		{hora3: 'h3', materia3: 'DjM3'},
	// 		{hora4: 'h4', materia4: 'DjM4'},
	// 		{hora5: 'h5', materia5: 'DjM5'},
	// 		{hora6: 'h6', materia6: 'DjM6'},
	// 		{hora7: 'h7', materia7: 'DjM7'},
	// 		{hora8: 'h8', materia8: 'DjM8'},
	// 	],
	// 	Dv:  [
	// 		{hora1: 'h1', materia1: 'DvM1'},
	// 		{hora2: 'h2', materia2: 'DvM2'},
	// 		{hora3: 'h3', materia3: 'DvM3'},
	// 		{hora4: 'h4', materia4: 'DvM4'},
	// 		{hora5: 'h5', materia5: 'DvM5'},
	// 		{hora6: 'h6', materia6: 'DvM6'},
	// 		{hora7: 'h7', materia7: 'DvM7'},
	// 		{hora8: 'h8', materia8: 'DvM8'},
	// 	]
	// })


	guardarDates = (vDataInici, vDataFinal) => {
		console.log("modificant data inici...")
		console.log(`vDataInici: ${vDataInici}`, `vDataFinal: ${vDataFinal}`)
		this.setState({dataInici: vDataInici})
		this.setState({dataFinal: vDataFinal})
	}

	guardarFestius = (vFestius) => {
		this.setState({festius: vFestius})
	}

	OpcsRng = React.createRef()
	OpcsFsts = React.createRef()
	generarPDF = (event) => {
		event.preventDefault()

		this.OpcsRng.current.guardar()
		this.OpcsFsts.current.guardar()
		
	}


	render () {
		const { classes } = this.props;

		return (
			
			<form className={classes.root} noValidate autoComplete="off" onSubmit={this.generarPDF}>
				{/* <OpcionsRang ref={this.OpcsRng}  guardarDates={ this.guardarDates }/>
				<OpcionsFestius ref={this.OpcsFsts}  guardarFestius={ this.guardarFestius }/> */}
				<OpcionsHoraris  />

				<Button type="submit" color="primary" variant="contained" onSubmit={this.generarPDF}>Generar...</Button>
			</form>


		);		
	}

}

export default withStyles(styles)(Opcions)