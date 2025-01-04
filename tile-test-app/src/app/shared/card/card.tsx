import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardContentHeading, StyledCard, StyledCardContent, StyledCardMedia } from './styles';

const MediaCard : React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <StyledCard>
      <StyledCardMedia
        sx={{ height: 60 }}
        image="https://placehold.co/60x60"
        title="green iguana"
      />
      <StyledCardContent>
        <CardContentHeading gutterBottom variant="h5" component="div">
          {title}
        </CardContentHeading>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
}
export default MediaCard;