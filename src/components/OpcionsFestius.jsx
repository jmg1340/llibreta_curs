import React, {useState, Component} from "react";
import { Grid, TextField, Button, IconButton, makeStyles, TableContainer, Paper, Table, TableHead, TableBody, TableCell, TableRow, withStyles} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';

const columns = [
  {
    field: 'festiu',
    headerName: 'Festiu',
    width: 90,
    editable: true,
  },
  {
    field: 'accions',
    headerName: '',
    width: 90,
    editable: false,
  },
]




const styles = (theme) => ({
  clOpcionsF: {
    '& > *': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
		border: '1px solid black',
		marginBottom: '5ch'
  },
	
});




class OpcionsFestius extends Component {
  

	state = {
		nouFestiu : '',
		festius : [ "11/9", "12/10", "1/11", "6/12", "8/12", "22/12 - 8/1", "1/5", "24/6" ],
		
	}
	
	componentDidMount = () => {
		console.log("estic a componentDidMount")

    let vfestius = JSON.parse(window.localStorage.getItem("festius"));
		console.log("vfestius: " + vfestius)
    if (vfestius) {
      this.setState({ festius : vfestius });
    }
	}



	methodToOnChange = (event) => { this.setState({ nouFestiu : event.target.value }) }
	guardar = () => { this.props.guardarFestius( this.state.festius ) }
	afegir = () => { 
			let arr = [ ...this.state.festius, this.state.nouFestiu ]
			this.setState({ festius : arr,
											nouFestiu: ''
			}) 
			window.localStorage.setItem("festius",  JSON.stringify(arr));
	}
	eliminarFestiu = row => { 
		console.log(`Eliminant festiu amb ID: ${row.id}`)
		let arr = this.state.festius.filter( (festiu, index) => row.id !== index)
		this.setState({ festius: arr})
		window.localStorage.setItem("festius",  JSON.stringify(arr));
	}





	render() {
		const { classes } = this.props;

		return (
			<Grid
				container
				spacing={1}
				direction="row"
				justifyContent="center"
				alignItems="center"
				alignContent="center"
				wrap="nowrap"
				className={ classes.clOpcionsF }
			>
				
			
				<TextField 
					id="standard-basic" 
					label="Nou Festiu" 
					variant="outlined"
					size="small" 
					InputLabelProps={{
							shrink: true,
					}}
					value={this.state.nouFestiu}
					onChange={this.methodToOnChange}
				/>

				<Button 
					variant="contained" 
					color="primary"
					onClick={this.afegir}
				>
					afegir
				</Button>





				<TableContainer component={Paper}>
					<Table className={classes.table} size="small" aria-label="a dense table">
						<TableHead>
							<TableRow>
							<TableCell>Festius</TableCell>
							<TableCell></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{
								this.state.festius.map( (festiu, index ) => { return {'id': index, "festiu": festiu} })
								.map((row, index) => (
								<TableRow key={index}>
									<TableCell key="row" component="th" scope="row">
										{row.festiu}
									</TableCell>
									<TableCell align="center">
										<IconButton aria-label="delete" size="small" onClick={ () => this.eliminarFestiu(row) }>
											<DeleteIcon color="secondary" />
										</IconButton>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>

			
			
			</Grid>			
		)
	}					
}


export default withStyles(styles)(OpcionsFestius)
