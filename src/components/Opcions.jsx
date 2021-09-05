import React from 'react';
import { TextField, makeStyles, Grid } from '@material-ui/core';

import OpcionsRang from "./OpcionsRang.jsx"
import OpcionsFestius from "./OpcionsFestius.jsx"
import OpcionsHoraris from "./OpcionsHoraris.jsx"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Opcions() {
  const classes = useStyles();

  const state = {
    dataInici: null,
    dataFinal: null,
    festius: [],
    horaris: {
      Dll: [
        {hora1: null, materia1: null},
        {hora2: null, materia2: null},
        {hora3: null, materia3: null},
        {hora4: null, materia4: null},
        {hora5: null, materia5: null},
        {hora6: null, materia6: null},
        {hora7: null, materia7: null},
        {hora8: null, materia8: null},
      ],
      Dm:  [
        {hora1: null, materia1: null},
        {hora2: null, materia2: null},
        {hora3: null, materia3: null},
        {hora4: null, materia4: null},
        {hora5: null, materia5: null},
        {hora6: null, materia6: null},
        {hora7: null, materia7: null},
        {hora8: null, materia8: null},
      ],
      Dcr: [
        {hora1: null, materia1: null},
        {hora2: null, materia2: null},
        {hora3: null, materia3: null},
        {hora4: null, materia4: null},
        {hora5: null, materia5: null},
        {hora6: null, materia6: null},
        {hora7: null, materia7: null},
        {hora8: null, materia8: null},
      ],
      Dj:  [
        {hora1: null, materia1: null},
        {hora2: null, materia2: null},
        {hora3: null, materia3: null},
        {hora4: null, materia4: null},
        {hora5: null, materia5: null},
        {hora6: null, materia6: null},
        {hora7: null, materia7: null},
        {hora8: null, materia8: null},
      ],
      Dv:  [
        {hora1: null, materia1: null},
        {hora2: null, materia2: null},
        {hora3: null, materia3: null},
        {hora4: null, materia4: null},
        {hora5: null, materia5: null},
        {hora6: null, materia6: null},
        {hora7: null, materia7: null},
        {hora8: null, materia8: null},
      ]
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <OpcionsRang dataInici={state.dataInici} dataFinal={state.dataFinal} />
      <OpcionsFestius festius={state.festius} />
      <OpcionsHoraris horaris={ state.horaris } />

    </form>
  );
}
