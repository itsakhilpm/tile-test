import { styled } from '@mui/system';
import { Box, AppBar, Container, AppBarProps } from '@mui/material';
export const StyledLayout = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
});

// Styled header
export const StyledHeader = styled(AppBar)<AppBarProps>({
    backgroundColor: '#fff',
    color: '#1f1f1f',
});

// Footer container
export const StyledFooter = styled(Box)({
    marginTop: 'auto',
    backgroundColor: '#3f51b5',
    color: '#ffffff',
    padding: '1rem',
    textAlign: 'center',
});

// Content area
export const Content = styled(Container)({
    flex: 1,
    marginTop: '2rem',
    marginBottom: '2rem',
    padding: '2rem',
});