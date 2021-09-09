import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core"

import OpcionsHorari from "./OpcionsHorari.jsx"

class OpcionsHoraris extends Component {
	
	state = {
		horaris: {
			Dll: {
				linia1: {hora: 'h1', materia: 'DllM1'},
				linia2: {hora: 'h2', materia: 'DllM2'},
				linia3: {hora: 'h3', materia: 'DllM3'},
				linia4: {hora: 'h4', materia: 'DllM4'},
				linia5: {hora: 'h5', materia: 'DllM5'},
				linia6: {hora: 'h6', materia: 'DllM6'},
				linia7: {hora: 'h7', materia: 'DllM7'},
				linia8: {hora: 'h8', materia: 'DllM8'},
			},
			Dm: {
				linia1: {hora: 'h1', materia: 'DmM1'},
				linia2: {hora: 'h2', materia: 'DmM2'},
				linia3: {hora: 'h3', materia: 'DmM3'},
				linia4: {hora: 'h4', materia: 'DmM4'},
				linia5: {hora: 'h5', materia: 'DmM5'},
				linia6: {hora: 'h6', materia: 'DmM6'},
				linia7: {hora: 'h7', materia: 'DmM7'},
				linia8: {hora: 'h8', materia: 'DmM8'},
			},
			Dcr: {
				linia1: {hora: 'h1', materia: 'DcrM1'},
				linia2: {hora: 'h2', materia: 'DcrM2'},
				linia3: {hora: 'h3', materia: 'DcrM3'},
				linia4: {hora: 'h4', materia: 'DcrM4'},
				linia5: {hora: 'h5', materia: 'DcrM5'},
				linia6: {hora: 'h6', materia: 'DcrM6'},
				linia7: {hora: 'h7', materia: 'DcrM7'},
				linia8: {hora: 'h8', materia: 'DcrM8'},
			},
			Dj: {
				linia1: {hora: 'h1', materia: 'DjM1'},
				linia2: {hora: 'h2', materia: 'DjM2'},
				linia3: {hora: 'h3', materia: 'DjM3'},
				linia4: {hora: 'h4', materia: 'DjM4'},
				linia5: {hora: 'h5', materia: 'DjM5'},
				linia6: {hora: 'h6', materia: 'DjM6'},
				linia7: {hora: 'h7', materia: 'DjM7'},
				linia8: {hora: 'h8', materia: 'DjM8'},
			},
			Dv: {
				linia1: {hora: 'h1', materia: 'DvM1'},
				linia2: {hora: 'h2', materia: 'DvM2'},
				linia3: {hora: 'h3', materia: 'DvM3'},
				linia4: {hora: 'h4', materia: 'DvM4'},
				linia5: {hora: 'h5', materia: 'DvM5'},
				linia6: {hora: 'h6', materia: 'DvM6'},
				linia7: {hora: 'h7', materia: 'DvM7'},
				linia8: {hora: 'h8', materia: 'DvM8'},
			}
			
			
			
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

		}
	}

	guardaValor = (obj) => {
		console.log( "estic a guarda Valor" )
		console.log(obj)
		console.log( `this.state.horaris[${obj.diaSetmana}][${obj.linia}][${obj.camp}]` )
		console.log( this.state.horaris[obj.diaSetmana][obj.linia][obj.camp] )
		// this.setState({ [ this.state.horaris[obj.diaSetmana][obj.linia][obj.camp] ] : obj.valor})
		this.setState({ [ `this.state.horaris[${obj.diaSetmana}][${obj.linia}][${obj.camp}]` ] : obj.valor})
	}


	render() {	
		return (
			<Grid
				container
				spacing={1}
				direction="column"
				justifyContent="center"
				alignItems="center"
				alignContent="center"
				wrap="nowrap"
				
			>
				
			
				<Typography variant="h6" color="initial">Horaris de la setmana</Typography>
				
				<OpcionsHorari diaSetmana="Dll" horari={this.state.horaris.Dll} onChange={(obj) => this.guardaValor(obj)} />
				<OpcionsHorari diaSetmana="Dm" horari={this.state.horaris.Dm} onChange={this.guardaValor} />
				<OpcionsHorari diaSetmana="Dcr" horari={this.state.horaris.Dcr} onChange={this.guardaValor} />
				<OpcionsHorari diaSetmana="Dj" horari={this.state.horaris.Dj} onChange={this.guardaValor} />
				<OpcionsHorari diaSetmana="Dv" horari={this.state.horaris.Dv} onChange={this.guardaValor} />
			
			
			</Grid>			
		)

	}

}


export default OpcionsHoraris
