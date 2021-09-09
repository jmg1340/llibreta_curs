import React, { Component } from "react";
import { withStyles, Grid, TextField, makeStyles,Typography } from "@material-ui/core"



const styles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
		// border: '1px solid black',
		// marginBottom: '5ch'
  },
	
});




class OpcionsHorari extends Component {


	methodToOnChange = (evt) => {
		const index = this.state.horari.indexOf(evt.target)
		console.log(`Index: ${index}`)
		// console.log( evt.target.name, evt.target.value )
		// this.props.guardaValor( evt.target.name, evt.target.value )
		this.props.onChange ({
			diaSetmana: this.props.diaSetmana,
			index: index,
			camp: evt.target.name, 
			valor: evt.target.value
		})
	}




	render() {
		const { classes } = this.props;	
		return (
			<div>

				<Typography 
					variant="h6" 
					color="initial"
					style={{marginTop: '5ch', marginBottom: '2ch'}}
					>
						{this.props.diaSetmana}
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
						this.props.horari.map( (objHoraMateria, index) => {
							
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
										name={`hora${index + 1}`} 
										label="Hora" 
										variant="outlined"
										size="small" 
										InputLabelProps={{
												shrink: true,
										}}
										value={objHoraMateria[`hora${index + 1}`]}
										onChange={ this.methodToOnChange }
									/>

									<TextField 
										name={`materia${index + 1}`} 
										label="Materia" 
										variant="outlined"
										size="small" 
										InputLabelProps={{
												shrink: true,
										}}
										value={objHoraMateria[`materia${index + 1}`]}
										onChange={ this.methodToOnChange }
									/>   

								
								</Grid>			


							)
						})

					}


				</Grid>			
			</div>

		)
	}

}


export default withStyles(styles)(OpcionsHorari)
