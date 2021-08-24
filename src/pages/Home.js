import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';

import Nav from '../common/styled-components/Nav';
import NavItem from '../common/styled-components/NavItem';
import AppTitle from '../common/styled-components/AppTitle';
import Icon from '../components/Icon';
import CovidImage from '../assets/images/Covid-19-image.png';


const Home = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;

  &::before {
    content: "";
    background-color: #EF4444;
    height: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('${CovidImage}');
    background-position: center center;
    background-size: cover;
  }
`;

const SubTitle = styled.h2`
  max-width: 225px;
  font-size: 16px;
  letter-spacing: -0.01em;
  font-weight: normal;
  color: #EF4444;
`;

const LeftPanel = styled.div`
  width: 50%;
  background: rgba(0,0,0,0.8);
  position: relative;
  z-index: 1;
  padding: 100px;
  display: flex;
  flex-direction: column;
`;

const HomeNavItem = styled(NavItem)`
  color: white;
`;

const HomeNav = styled(Nav)`
  margin-top: auto;
`;


class HomePage extends Component {

  render() {
    return (
      <Home>
        <LeftPanel>
          <AppTitle>Panacée</AppTitle>

          <SubTitle>Suivre la progression du Covid-19 au Canada, en temps réel.</SubTitle>

          <HomeNav>
            <HomeNavItem>
              <Link to="/stat/cases/absolue">
                <Icon color="white" icon="nav" size="24" />
                Nouveaux cas
              </Link>
            </HomeNavItem>
            <HomeNavItem>
              <Link to="/stat/deaths/absolue">
                <Icon color="white" icon="nav" size="24" />
                Décès
              </Link>
            </HomeNavItem>
          </HomeNav>
          
        </LeftPanel>
      </Home>
    )
  }
}
     
export default withRouter(HomePage);