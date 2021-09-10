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
			

		}
	}



	guardar = () => { this.props.guardarHoraris( this.state.horaris ) }


	guardaValor = (obj) => {
		this.setState( ( prevState ) => ({
			...prevState, horaris : {
				...prevState.horaris, [obj.diaSetmana] : {
					...prevState.horaris[obj.diaSetmana] , [obj.linia] : {
						...prevState.horaris[obj.diaSetmana][obj.linia] , [obj.camp] : obj.valor
					}
				}
			}
		}))
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
