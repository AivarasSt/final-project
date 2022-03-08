import React from 'react';
import {
  Box,
  BoxProps,
  Button,
  Drawer,
  Grid,
  styled,
  Theme,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

type AdminMobileNavigationProps = BoxProps & {
  breakpoint: string,
};

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.light,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  fontSize: '3vw',
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '5vw',
  textDecoration: 'none',
  padding: '0.2vw',
  paddingBottom: '0.3vw',
  marginTop: '1vw',
  letterSpacing: 6,
  width: '100%',
  ':hover': {
    boxShadow: `0px 1px ${theme.palette.secondary.main}`,
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.primary.light,
    height: '100vh',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const AdminMobileNavigation: React.FC<AdminMobileNavigationProps> = ({ breakpoint }) => {
  const anchor = 'top';
  const [state, setState] = React.useState({
    [anchor]: false,
  });

  const toggleDrawer = (key: string, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
      return;
    }

    setState({ ...state, [key]: open });
  };

  return (
    <Grid item xs={12} sx={{ flexDirection: 'column', display: { xs: 'flex', [breakpoint]: 'none' } }}>
      <Box>
        <StyledButton onClick={() => toggleDrawer(anchor, true)}>MENU</StyledButton>
        <StyledDrawer
          id="menu-appbar"
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
          }}
          >
            <StyledNavLink onClick={() => toggleDrawer(anchor, true)} to="/admin/dashboard">
              Orders
            </StyledNavLink>
            <StyledNavLink onClick={() => toggleDrawer(anchor, true)} to="/admin/products">
              Products
            </StyledNavLink>
            <StyledNavLink onClick={() => toggleDrawer(anchor, true)} to="/shop">
              Shop
            </StyledNavLink>
          </Box>
          <Button
            sx={(theme: Theme) => ({
              pb: '3vw',
              fontSize: '3vw',
              justifyContent: 'center',
              color: theme.palette.secondary.main,
            })}
            onClick={() => toggleDrawer(anchor, true)}
          >
            Close
          </Button>
        </StyledDrawer>
      </Box>
    </Grid>
  );
};

export default AdminMobileNavigation;
