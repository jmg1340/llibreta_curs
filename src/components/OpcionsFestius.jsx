import React, { Component } from "react";
import { Grid, TextField, Button } from "@material-ui/core"

export default class OpcionsRang extends Component {
  render() {

		const state = {
			nouFestiu: null
		}

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
            label="Nou Festiu" 
            variant="outlined" 
            InputLabelProps={{
                shrink: true,
            }}
						value={state.nouFestiu}

          />

					<Button variant="contained" color="primary">
						afegir...
					</Button>

          <TextField 
            id="standard-basic" 
            label="Festius" 
            variant="outlined" 
						multiline
            InputLabelProps={{
                shrink: true,
            }}
						value={this.props.festius}

          />

						
      
      
      </Grid>			
		)
  }
}
