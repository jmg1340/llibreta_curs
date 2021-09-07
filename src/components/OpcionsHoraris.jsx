import React from "react";
import { Grid, Typography } from "@material-ui/core"

import OpcionsHorari from "./OpcionsHorari.jsx"

export default function OpcionsRang (props){
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
			
			<OpcionsHorari diaSetmana="Dilluns" horari={props.horaris.Dll} />
			<OpcionsHorari diaSetmana="Dimarts" horari={props.horaris.Dm} />
			<OpcionsHorari diaSetmana="Dimecres" horari={props.horaris.Dcr} />
			<OpcionsHorari diaSetmana="Dijous" horari={props.horaris.Dj} />
			<OpcionsHorari diaSetmana="Divendres" horari={props.horaris.Dv} />
		
		
		</Grid>			
	)

}
