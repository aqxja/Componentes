import { Box, Checkbox, TextField, FormControlLabel, FormControl, Button, Typography, Grid, Link, Container } from '@mui/material'
import React from 'react'

function Formulario(props) {
  return (
    <>
    <Container container="main" maxWidth="xs">
    <Box 
    sx={{

         marginTop: 8,
         display: 'Flex',
         flexDirection: 'column',
         alignItems: 'center',
    }}>
      <Typography component="h1" variant="h4">
        
        {props.titulo}

      </Typography>
        <Box component="form" sx={{  mt: 1 }}>
            <TextField fullWidth margin="normal" label="Email" nome="email" variant="filled" required/>
            <TextField fullWidth margin="normal"label="Senha" nome="senha" variant="filled" required/>
            <FormControlLabel
            control={<Checkbox value="remember" color="primary" chec/>}
            label="Lembre-me"
            />
            <Button fullWidth type="submit" variant="contained" sx={{ mt: 1, mb: 1}} color="warning" >logar</Button>
            <Grid container>
              <Grid item xs>
                  <Link href="#">Esqueci minha senha</Link>
              </Grid>
              <Grid item>
                  <Link href="#">Cadastre-se</Link>
              </Grid>
            </Grid>
        </Box>
    </Box>
    </Container>
    </>
  )
}

export default Formulario