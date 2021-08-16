import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import { ImageLogo, StyledToolbar } from './style';
import { useHistory } from 'react-router-dom';
import {goToCasesGames, goToContact, goToStart} from "../../Routes/Coordinator"
import { Button } from '@material-ui/core';
import { Mobile } from '../../Services/Responsive';
import planxp from "../../Services/Image/plan-logo.png"

const useStyles = makeStyles((theme) => ({
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Header = () => {
  const history = useHistory()
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button>Quem Somos</Button>
      </MenuItem>

      <MenuItem>
        <Button onClick={()=> goToStart(history)}>O que Fazemos</Button>
      </MenuItem>

      <MenuItem>
        <Button onClick={()=> goToCasesGames(history)}>Plan News</Button>
      </MenuItem>

      <MenuItem>
        <Button>Nossos Clientes</Button>
      </MenuItem>

      <MenuItem>
        <Button onClick={()=> goToContact(history)}>Contato</Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Mobile>
    <div className={classes.grow}>
      <AppBar position="static">
        <StyledToolbar>
        <ImageLogo className={"logo"} src={planxp} alt={"logo"}/>
          <div className={classes.search}>

          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </StyledToolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
    </Mobile>
  );
}

export default Header;