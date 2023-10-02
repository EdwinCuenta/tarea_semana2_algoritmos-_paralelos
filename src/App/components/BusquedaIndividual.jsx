import { Divider, Grid, TextField, Typography } from "@mui/material"



export const BusquedaIndividual = ({ titulo, arreglo, duracion }) => {

  const array = [2,7,9,11,1,3,6,15,20,3,18];
  return (
    <Grid
      item
      xs={2.4}
      // height={500}
      sx={{p: 2}}
  >
      <Grid container direction={'column'} textAlign={'center'}>

          <Typography variant="h7"> { titulo } </Typography>

      </Grid>
      <Divider/>

      {/* Arrego ordenado */}
      <Grid mt={1}  bgcolor={'white'} height={'20rem'}container direction={'column'} alignItems={'center'}
      >
        <TextField
          fullWidth
          name="resultado"
          label="Resultado"
          placeholder="Arreglo completo"
          multiline
          maxRows={12}
          value={JSON.stringify(arreglo)}
        >

        </TextField>
        {/* <p>a</p> */}
      </Grid>
      {/* Tiempo que tardo el algoritmo */}
      <Grid
        textAlign={'center'}
      >
          <p> { duracion ?  `${duracion} Seg` : 'Tiempo tardado'} </p>
      </Grid>
    </Grid>
  )
}
