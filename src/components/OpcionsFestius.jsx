import React, {useState} from "react";
import { Grid, TextField, Button, makeStyles, TableContainer, Paper, Table, TableHead, TableBody, TableCell, TableRow} from "@material-ui/core"


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




const useStyles = makeStyles((theme) => ({
  clOpcionsF: {
    '& > *': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
		border: '1px solid black',
		marginBottom: '5ch'
  },
	
}));




export default function OpcionsRang (props) {
  
	  const classes = useStyles();
		
		const [nouFestiu, setNouFestiu] = useState('')
		
		const rows = props.festius.map( (festiu) => { return {"festiu": festiu} })

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
					value={nouFestiu}
				/>

				<Button variant="contained" color="primary">
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
							{rows.map((row, index) => (
								<TableRow key={index}>
									<TableCell key="row" component="th" scope="row">
										{row.festiu}
									</TableCell>
									<TableCell align="center"></TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>

      
      
      </Grid>			
		)
  
}
