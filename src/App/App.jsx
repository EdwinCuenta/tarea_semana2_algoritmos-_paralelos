import { Box, Button, Divider, Grid, TextField, Typography } from "@mui/material"
import { BusquedaIndividual } from "./components/BusquedaIndividual"
import { concurrencia, resultados, arryDesordenado } from "./data/algoritmos"
import { useEffect, useState } from "react"



export const App = () => {
    let arregloMuestra;

    const [formState, setFormState] = useState({
        arreglo:'',
        valor: 0,
    })
    const { arreglo, valor } = formState;
    const onInputChange = (event) => {
        const { name, value } = event.target;
        // console.log(name)
        setFormState({ ...formState, [name]: value });
      };
    const [resultadosState, setResultadosState] = useState()

    const [posicion, setPosicion] = useState([])
    // const arreglo = [2,7,9,11,1,3,6,15,20,3,18]
    // concurrencia
    // const  resultados  = concurrencia();
    // useEffect(() => {
        
    //     setResultadosState(resultados)
    
    // }, [])
    useEffect(() => {
        const cambioValor = parseInt(valor)
        concurrencia(arreglo, cambioValor);
        
    }, [resultados])
    const mostrar = ()=> {
        
        setResultadosState(resultados)
        // alert(typeof valor)
        // setPosicion([...posicion, arryDesordenado])
        console.log( arryDesordenado )
        // console.log(resultados)
    }
    
    



  return (
    <>

        <Grid
            sx={{ 
                backgroundColor: 'white', 
                width: '80vw', 
                // height: '40vw', 
                borderRadius: 3,
                position: "relative",
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                mb: 1
            }}
            container
            direction={'column'}
            alignItems={'center'}
        >

         <Typography variant="h4"> Algoritmos de busqueda y sorteo </Typography>
            <Grid mt={2}>

            <TextField 
                id="arreglo"
                label="Arreglo"
                name="arreglo"
                placeholder="Ingrese la posicion"
                value={arreglo}
                onChange={onInputChange}
                sx={{ pr: 1 }}
            />
            <TextField 
                id="valor"
                label="Valor"
                name="valor"
                placeholder="Ingrese la posicion"
                value={valor}
                onChange={onInputChange}
            />
            </Grid>
                {
                    
                    
                }
                {/* <Typography variant="h6"> { posicion ?`posicion: ${ posicion }`:'posicion: ' } </Typography> */}
            {/* Contenedor donde los distintos Algoritmos */}
            <Grid container direction={'row'} width={'73vw'} sx={{ mt: 13, bgcolor: '#EEEEEE' }}
            >
                {/* Contenedor especifico */}
                {/* <BusquedaIndividual titulo={ 'Búsqueda Binaria' } arreglo={ [] }   />
                <BusquedaIndividual titulo={ 'Ordenamiento de la Burbuja' } arreglo={ [] }   />
                <BusquedaIndividual titulo={ ' Quick Sort' } arreglo={ [] }   />
                <BusquedaIndividual titulo={ 'Método de Inserción' } arreglo={ [] }   /> */}

                {
                    resultadosState &&
                    resultadosState.map((result,i) => {
                        if (i === 2){
                            arregloMuestra =result.result
                            console.log( arregloMuestra )
                        }
                        return <BusquedaIndividual key={i} titulo={ result.algorithm } arreglo={ result.result } duracion={ result.duration.toFixed(20) }   />
                    })
                } 

            </Grid>


        </Grid>

        <Button
            variant="contained"
            color="primary"
            onClick={() => {mostrar()}}
        >
            Iniciar
        </Button>
    
    </>
  )
}
