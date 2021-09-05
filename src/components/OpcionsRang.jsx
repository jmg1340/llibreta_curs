import React, { Component } from "react";
import { Grid, TextField } from "@material-ui/core"

export default class OpcionsRang extends Component {
  render() {
    return (
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
        
      >
        
      
          <TextField 
            id="standard-basic" 
            label="Data inicial" 
            variant="outlined" 
            InputLabelProps={{
                shrink: true,
            }}
						value={this.props.dataInici}

          />
          <TextField 
            id="standard-basic" 
            label="Data final" 
            variant="outlined" 
            InputLabelProps={{
                shrink: true,
            }}
						value={this.props.dataFinal}

          />   
      
      
      
      </Grid>			
		)
  }
}
