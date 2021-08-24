import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import AppTitle from '../common/styled-components/AppTitle';
import Nav from '../common/styled-components/Nav';
import NavItem from '../common/styled-components/NavItem';
import Icon from './Icon';

const MenuContent = styled.div`
  background: white;
  padding: 60px 100px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const NavLink = styled(Link)`
  color: #D1D5DB;
  transition: all 0.25s ease-in-out;

  svg {
    fill: #D1D5DB;
    transition: all 0.25s ease-in-out;
  }

  &:hover, &.active {
    color: #4B5563;
    svg {
      fill: #4B5563;
    }
  }
`;

class Menu extends Component {
  render(){
    const { indicator, mode } = this.props.match.params;

    return ( 
      <MenuContent>
        <Link to="/">
          <AppTitle>Panacée</AppTitle>
        </Link>

        <Nav>
          <NavItem>
            <NavLink to={`/stat/cases/${mode}`} className={indicator === 'cases' ? 'active' : ''} >
              <Icon color="inherit" icon="nav" size="24" />
              Nouveaux cas
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to={`/stat/deaths/${mode}`} className={indicator === 'deaths' ? 'active' : ''}>
              <Icon color="inherit" icon="nav" size="24" />
              Décès
            </NavLink>
          </NavItem>
          <hr />
          <NavItem>
            <NavLink to={`/stat/${indicator}/absolue`} className={mode === 'absolue' ? 'active' : ''}>
              <Icon color="inherit" icon="nav" size="24" />
              Données Absolues
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to={`/stat/${indicator}/relative`} className={mode === 'relative' ? 'active' : ''}>
              <Icon color="inherit" icon="nav" size="24" />
              Données Relatives
            </NavLink>
          </NavItem>
        </Nav>

      </MenuContent>
    )
  }
}

export default withRouter(Menu);