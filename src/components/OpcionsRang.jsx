import React from "react";
import { Grid, TextField, makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
  clOpcionsR: {
    '& > *': {
      margin: theme.spacing(2),
      // width: '25ch',
    },
		border: '1px solid black',
		marginBottom: '5ch'
  },
	
}));



export default function OpcionsRang (props) {
  const classes = useStyles();
	
		return (
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        wrap="nowrap"
				className={ classes.clOpcionsR }
        
      >
        
      
          <TextField 
            id="standard-basic" 
            label="Data inicial curs" 
            variant="outlined"
						size="small" 
            InputLabelProps={{
                shrink: true,
            }}
						value={props.dataInici}

          />
          <TextField 
            id="standard-basic" 
            label="Data final curs" 
            variant="outlined"
						size="small" 
            InputLabelProps={{
                shrink: true,
            }}
						value={props.dataFinal}

          />   
      
      
      
      </Grid>			
		)
  
}
