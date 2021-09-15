import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, withStyles, AppBar, Tabs, Tab, Box, Grid } from '@material-ui/core';



// import Opcions from "./Opcions.jsx"
import OpcionsRang from "./OpcionsRang.jsx"
import OpcionsFestius from "./OpcionsFestius.jsx"
import OpcionsHoraris from "./OpcionsHoraris.jsx"
import Llibreta from "./Llibreta.jsx"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} border={"1px solid black"}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
	clTPane:{
		width: '50%'
	}
});





class SimpleTabs extends Component {
  
	state = {
		value: 0,

		dataInici : '',
		dataFinal : '',
		festius: [],
		horaris: {}
	}


	guardarDates = (vDataInici, vDataFinal) => {
		// console.log("execució GUARDAR DATES")

		this.setState({dataInici: vDataInici})
		this.setState({dataFinal: vDataFinal})
	}

	guardarFestius = (vFestius) => {
		// console.log("execució GUARDAR FESTIUS")
		this.setState({festius: vFestius})
	}

	guardarHoraris = (vHoraris) => {
		// console.log("execució GUARDAR HORARIS")
		this.setState({horaris: vHoraris})
	}


	OpcsRng = React.createRef()
	OpcsFsts = React.createRef()
	OpcsHrs = React.createRef()
	Llbr = React.createRef()

	generarPDF = (event) => {
		event.preventDefault()

		new Promise( (resolv, reject) => {
			this.OpcsRng.current.guardar()
			this.OpcsFsts.current.guardar()
			this.OpcsHrs.current.guardar()
			resolv()
		 }).then( () => { 
		// 	console.log("Dades rang dates passades")
		// 	this.OpcsFsts.current.guardar()
		// 	return
		// }).then( () => {
		// 	console.log("Dades festius passades")
		// 	this.OpcsHrs.current.guardar()
		// 	return
		//  }).then( () => { 
			// console.log("Dades horaris passades")
			this.setState({ value: 1 })   // selecciona pestanya "Llibreta"
			return
		}).then( () => { 
			// console.log("CANVI A PESTANYA 'LLIBRETA'")
			this.Llbr.current.generar()
		})
		
	}


	handleChange = (event, newValue) => {
    this.setState({ value: newValue })	
	};


	render () {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static" color="transparent">
					<Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
						<Tab label="Opcions" {...a11yProps(0)} />
						<Tab label="Llibreta" {...a11yProps(1)} />
					</Tabs>
				</AppBar>
				
				<TabPanel value={this.state.value} index={0}>
					<Grid
						container
						spacing={2}
						direction="column"
						justifyContent="center"
						alignItems="center"	
						>			    
							<form className={classes.root} noValidate autoComplete="off" onSubmit={this.generarPDF}>
								<OpcionsRang ref={this.OpcsRng}  guardarDates={ this.guardarDates }/>
								<OpcionsFestius ref={this.OpcsFsts}  guardarFestius={ this.guardarFestius }/>
								<OpcionsHoraris ref={this.OpcsHrs} guardarHoraris={ this.guardarHoraris } />

								<Button type="submit" color="primary" variant="contained" onSubmit={this.generarPDF}>Generar...</Button>
							</form>
					</Grid>
				</TabPanel>
				
				<TabPanel value={this.state.value} index={1}>
					<Grid
							container
							spacing={2}
							direction="column"
							justifyContent="center"
							alignItems="center"	
							>			    
								<Llibreta ref={this.Llbr} dades={this.state}/>
						</Grid>
				</TabPanel>
			</div>
		);

	}

}



export default withStyles(styles)(SimpleTabs)