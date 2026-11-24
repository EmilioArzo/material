
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined'
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LanguageIcon from '@mui/icons-material/Language'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f3f3f5',
    },
  },
})

const persona = {
  nombre: 'Paciente',
  edad: 'Terco',
  ocupacion: 'Respetuoso',
  ciudad: 'Empatía',
  correo: 'Honesto',
  telefono: 'Perseverancia',
  github: 'Realista',
  linkedin: 'Determinación',
  sitio: 'Resiliente',
  hobby: 'Voluntad',
}

// Distribución de las 12 columnas
const filas = [
  {
    span: 12,
    atributos: [
      { valor: persona.nombre, icono: BadgeOutlinedIcon },
    ],
  },
  {
    span: 6,
    atributos: [
      { valor: persona.edad, icono: CakeOutlinedIcon },
      { valor: persona.ocupacion, icono: WorkOutlinedIcon },
    ],
  },
  {
    span: 4,
    atributos: [
      { valor: persona.ciudad, icono: LocationOnOutlinedIcon },
      { valor: persona.correo, icono: EmailOutlinedIcon },
      { valor: persona.telefono, icono: PhoneOutlinedIcon },
    ],
  },
  {
    span: 3,
    atributos: [
      { valor: persona.github, icono: GitHubIcon },
      { valor: persona.linkedin, icono: LinkedInIcon },
      { valor: persona.sitio, icono: LanguageIcon },
      { valor: persona.hobby, icono: CameraAltOutlinedIcon },
    ],
  },
]

function AtributoCard({ valor, icono: Icono }) {
  return (
    <Paper
      sx={{
        p: 3,
        textAlign: 'center',
        bgcolor: '#111111',
        color: 'white',
        height: '100%',
      }}
    >
      <Stack alignItems="center" spacing={1}>
        <Icono />
        <Typography variant="h6">
          {valor}
        </Typography>
      </Stack>
    </Paper>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Ficha personal
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Grid de 12 columnas
        </Typography>

        <Grid container spacing={2}>
          {filas.map((fila, index) =>
            fila.atributos.map((atributo, i) => (
              <Grid
                key={`${index}-${i}`}
                size={{ xs: 12, sm: 6, md: fila.span }}
              >
                <AtributoCard {...atributo} />
              </Grid>
            ))
          )}
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" textAlign="center">
            12 columnas = ancho completo | 6 = mitad | 4 = tercio | 3 = cuarto
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
