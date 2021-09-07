import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, AppBar, Tabs, Tab, Box, Grid } from '@material-ui/core';



import Opcions from "./Opcions.jsx"


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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
	clTPane:{
		width: '50%'
	}
}));





export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
					<Tab label="Opcions" {...a11yProps(0)} />
          <Tab label="Llibreta" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      
			<TabPanel value={value} index={0}>
			<Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"	
				>			    
				  <Opcions style={{ color: 'red' }}/>
				</Grid>
      </TabPanel>
      
			<TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
}
