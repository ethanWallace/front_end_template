import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import Login from '@gctools-components/gc-login';
import LocalizedComponent
  from '@gctools-components/react-i18n-translation-webpack';

import { loginAction, logoutAction, clearErrorAction } from '../store';

// Config
import oidcConfig from '../oidcConfig.dev';

// Containers
import Home from './Home';
import Info from './Info';

// Assets
import enFip from '../assets/imgs/sig-en-w.png';

export class App extends Component {
  static toggleLanguage(e) {
    if (e) e.preventDefault();
    localizer.setLanguage(((localizer.lang === 'en_CA') ? 'fr_CA' : 'en_CA'));
  }
  constructor(props) {
    super(props);
    this.state = { name: false };
  }
  render() {
    const {
      onLogin,
      onLogout,
    } = this.props;

    const doLogin = (user) => {
      this.setState({ name: user.profile.name });
      onLogin(user);
    };

    const doLogout = () => {
      this.setState({ name: false });
      onLogout();
    };
    return (
      <BrowserRouter>
        <div>
          <Navbar color="white" className="shadow-sm">
            <div className="h-100 directory-fip">
              <img src={enFip} alt="Government of Canada" />
            </div>
            <NavbarBrand href="/" className="directory-brand">
              <span>App Title</span>
            </NavbarBrand>
            <Nav className="ml-auto">
              <NavItem className="mr-2">
                <Login
                  oidcConfig={oidcConfig}
                  onUserLoaded={doLogin}
                  onUserFetched={doLogin}
                  onLogoutClick={(e, oidc) => {
                    oidc.logout();
                    doLogout();
                  }}
                >
                  {({ onClick }) => (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        onClick(e);
                      }}
                    >
                      {this.state.name || 'Login'}
                    </Button>
                  )}
                </Login>
              </NavItem>
              <NavItem>
                <Button onClick={App.toggleLanguage}>
                  {__('Language')}
                </Button>
              </NavItem>
            </Nav>
          </Navbar>
          <main>
            <Container className="mt-3">

              {/* Routing in react */}
              <Switch>
                <Fragment>
                  <Route
                    exact
                    path="/"
                    component={Home}
                  />
                  <Route path="/info" component={Info} />
                </Fragment>
              </Switch>
            </Container>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

App.defaultProps = {
  onLogin: () => {},
  onLogout: () => {},
};

App.propTypes = {
  /** Login event callback  */
  onLogin: PropTypes.func,
  /** Logout event callback */
  onLogout: PropTypes.func,
};

const mapStToProps = ({ showError }) => ({ showError: showError || [] });

const mapDispToProps = dispatch => ({
  onLogin: profile => dispatch(loginAction(profile)),
  onLogout: () => dispatch(logoutAction()),
  onErrorClose: () => dispatch(clearErrorAction()),
});

export default connect(mapStToProps, mapDispToProps)(LocalizedComponent(App));
