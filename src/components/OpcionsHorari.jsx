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


	methodToOnChange = linia => evt => {
		
		console.log( evt.target.name, evt.target.value )
		console.log( "LINIA: " + linia)
		// this.props.guardaValor( evt.target.name, evt.target.value )
		this.props.onChange ({
			diaSetmana: this.props.diaSetmana,
			linia: linia,
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
						Object.keys(this.props.horari).map( (keyLinia, index) => {
							let hora = this.props.horari[keyLinia].hora
							let materia = this.props.horari[keyLinia].materia
								
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
										name={`hora`} 
										label="Hora" 
										variant="outlined"
										size="small" 
										InputLabelProps={{
												shrink: true,
										}}
										value={hora}
										onChange={ this.methodToOnChange( keyLinia ) }
									/>

									<TextField 
										name={`materia`} 
										label="Materia" 
										variant="outlined"
										size="small" 
										InputLabelProps={{
												shrink: true,
										}}
										value={materia}
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
