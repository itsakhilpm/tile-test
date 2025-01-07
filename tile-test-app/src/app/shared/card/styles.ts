import { styled, TypographyProps } from '@mui/system';
import { Card, CardContent, CardContentProps, CardMedia, CardMediaProps, CardProps, Typography } from '@mui/material';

export const StyledCard = styled(Card)<CardProps>({
    backgroundColor: '#fff',
    padding:"3.125rem",
    borderRadius: '.5rem',
    boxShadow: '0 0 #000, 0 0 #000, 0px 6px 90px rgba(8,14,40,.04)',
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
    transitionDuration: ".15s",
    "&:hover": {
        boxShadow: '0 0 #000, 0 0 #000, 0px 6px 90px rgba(8, 14, 40, .1)',
    }
});
export const StyledCardMedia = styled(CardMedia)<CardMediaProps>({
    width: '60px',
});
export const StyledCardContent = styled(CardContent)<CardContentProps>({
    padding:"10px 0px 0px",
   "p":{
        color: 'rgb(117 118 147)',
        fontSize: "16px",
        lineHeight: "26px",
        fontWeight: "400",
    },
    "&:last-child": {
        padding:"10px 0px 0px",
    }
});
export const CardContentHeading = styled(Typography)<TypographyProps>({
    fontWeight: "700",
    fontSize: "26px",
    lineHeight: "32px",
});