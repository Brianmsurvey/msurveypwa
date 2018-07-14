import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import HeaderLinks from "../Header/HeaderLinks";

import sidebarBgImage from "../../assets/img/mSurvey.jpg";
import logo from "../../assets/img/mSurvey-logo.png";

import dashboardRoutes from "../../routes/dashboard";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + sidebarBgImage + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color="black"
        data-image={sidebarBgImage}
      >
        <div className="sidebar-background" style={sidebarBackground} />
        <div className="logo">
          <a href="http://localhost:8080" className="simple-text logo-mini">
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a href="http://localhost:8080" className="simple-text logo-normal">
            mSurvey Audience
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <HeaderLinks /> : null}
            {dashboardRoutes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  prop.toShow && (
                    <li
                      className={
                        prop.upgrade
                          ? "active active-pro"
                          : this.activeRoute(prop.path)
                      }
                      key={key}
                    >
                      <NavLink
                        exact={true}
                        to={prop.path}
                        className="nav-link"
                        activeClassName="active"
                      >
                        <h6 className="text-center">
                          <i className={prop.icon} />
                          {prop.name}
                        </h6>
                      </NavLink>
                    </li>
                  )
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
