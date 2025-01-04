import { styled, TypographyProps } from '@mui/system';
import { Card, CardContent, CardContentProps, CardMedia, CardMediaProps, CardProps, Typography } from '@mui/material';

export const StyledCard = styled(Card)<CardProps>({
    backgroundColor: '#fff',
    padding:"20px",
});
export const StyledCardMedia = styled(CardMedia)<CardMediaProps>({
    width: '60px',
});
export const StyledCardContent = styled(CardContent)<CardContentProps>({
    padding:"10px 0px 0px",
    "&:last-child": {
        padding:"10px 0px 0px",
    }
});
export const CardContentHeading = styled(Typography)<TypographyProps>({
    fontSize: '18px',
});