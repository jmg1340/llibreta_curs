import React from "react";
import { Grid, TextField, makeStyles,Typography } from "@material-ui/core"



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
		// border: '1px solid black',
		// marginBottom: '5ch'
  },
	
}));




export default function OpcionsHorari (props) {
	const classes = useStyles();

	return (
		<div>

			<Typography 
				variant="h6" 
				color="initial"
				style={{marginTop: '5ch', marginBottom: '2ch'}}
				>
					{props.diaSetmana}
				</Typography>

			<Grid
				container
				spacing={1}
				direction="column"
				justifyContent="center"
				alignItems="center"
				alignContent="center"
				wrap="nowrap"

			>
				
				{
					props.horari.map( (objHoraMateria, index) => {
						
						return (

							<Grid
								key={index}
								container
								spacing={1}
								direction="row"
								justifyContent="center"
								alignItems="center"
								alignContent="center"
								wrap="nowrap"
								className={ classes.root }
							>
			
								<TextField 
									name="hora{index}" 
									label="Hora" 
									variant="outlined"
									size="small" 
									InputLabelProps={{
											shrink: true,
									}}
									value={objHoraMateria[`hora${index + 1}`]}
								/>

								<TextField 
									name="hora{index}" 
									label="Materia" 
									variant="outlined"
									size="small" 
									InputLabelProps={{
											shrink: true,
									}}
									value={objHoraMateria[`materia${index + 1}`]}
								/>   

							
							</Grid>			


						)
					})

				}


			</Grid>			
		</div>

		
		
	)
}
