'use client';

import Navbar from "@/components/navbar/Navbar"
import Grid from "@mui/material/Grid/Grid";
import Paper from '@mui/material/Paper';
import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import Layout from "@/components/layout/Layout";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface CardComponentProps {
  bgcolor: string;
  title: string;
  text: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ bgcolor, title, text }) => {
  return (
    <Grid item xs={12} sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', }}>
      <Card sx={{ bgcolor: bgcolor, color: 'white' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.white' }}>
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default function RowAndColumnSpacing() {
  return (
    <Layout>
      <Box >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          <CardComponent bgcolor='#883549' title='velocidad de carga rápida' 
            text='No habrá tiempo de espera. Tu página se cargará al instante, manteniendo su atención y evitando cualquier frustración.' />
          <CardComponent bgcolor='#357E88' title='Contenido Atractivo y Valioso' 
            text='Cada vez que accedan a tu página, descubrirán contenido relevante y fascinante que les interesa. ¡No podrán dejar de explorar!' />
          <CardComponent bgcolor='#8D088F' title='Soporte las 24 horas' 
            text='Estamos disponibles las 24 horas del día, los 7 días de la semana, para brindarte la mejor asistencia.' />
        </Grid>
      </Box>
    </Layout>
  );
}
