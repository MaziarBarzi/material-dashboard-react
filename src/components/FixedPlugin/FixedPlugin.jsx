/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React, { Component } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon
} from "react-share";
import GitHubButton from "react-github-button";

import imagine1 from "assets/img/sidebar-1.jpg";
import imagine2 from "assets/img/sidebar-2.jpg";
import imagine3 from "assets/img/sidebar-3.jpg";
import imagine4 from "assets/img/sidebar-4.jpg";

import Button from "components/CustomButtons/Button.jsx";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show",
      bg_checked: true,
      bgImage: this.props.bgImage
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleFixedClick();
  }
  render() {
    return (
      <div
        className={classnames("fixed-plugin", {
          "rtl-fixed-plugin": this.props.rtlActive
        })}
      >
        <div id="fixedPluginClasses" className={this.props.fixedClasses}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu">
            <li className="header-title">SIDEBAR FILTERS</li>
            <li className="adjustments-line">
              <a className="switch-trigger">
                <div>
                  <span
                    className={
                      this.props.bgColor === "purple"
                        ? "badge filter badge-purple active"
                        : "badge filter badge-purple"
                    }
                    data-color="purple"
                    onClick={() => {
                      this.props.handleColorClick("purple");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "blue"
                        ? "badge filter badge-blue active"
                        : "badge filter badge-blue"
                    }
                    data-color="blue"
                    onClick={() => {
                      this.props.handleColorClick("blue");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "green"
                        ? "badge filter badge-green active"
                        : "badge filter badge-green"
                    }
                    data-color="green"
                    onClick={() => {
                      this.props.handleColorClick("green");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "red"
                        ? "badge filter badge-red active"
                        : "badge filter badge-red"
                    }
                    data-color="red"
                    onClick={() => {
                      this.props.handleColorClick("red");
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === "orange"
                        ? "badge filter badge-orange active"
                        : "badge filter badge-orange"
                    }
                    data-color="orange"
                    onClick={() => {
                      this.props.handleColorClick("orange");
                    }}
                  />
                </div>
              </a>
            </li>
            <li className="header-title">Images</li>
            <li className={this.state["bgImage"] === imagine1 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine1 });
                  this.props.handleImageClick(imagine1);
                }}
              >
                <img src={imagine1} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === imagine2 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine2 });
                  this.props.handleImageClick(imagine2);
                }}
              >
                <img src={imagine2} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === imagine3 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine3 });
                  this.props.handleImageClick(imagine3);
                }}
              >
                <img src={imagine3} alt="..." />
              </a>
            </li>
            <li className={this.state["bgImage"] === imagine4 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine4 });
                  this.props.handleImageClick(imagine4);
                }}
              >
                <img src={imagine4} alt="..." />
              </a>
            </li>

            <li className="button-container">
              <div className="button-container">
                <Button
                  color="success"
                  href="https://www.creative-tim.com/product/material-dashboard-react?ref=mdr-fixed-plugin"
                  target="_blank"
                  fullWidth
                >
                  Download free!
                </Button>
              </div>
            </li>
            <li className="button-container">
              <div className="button-container">
                <Button
                  color="warning"
                  href="https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mdr-fixed-plugin"
                  target="_blank"
                  fullWidth
                >
                  Get PRO version
                </Button>
              </div>
            </li>
            <li className="button-container">
              <NavLink to={"/documentation"} activeClassName="active">
                <Button color="info" fullWidth>
                  Documentation
                </Button>
              </NavLink>
            </li>

            <li className="header-title" id="sharrreTitle">
              Thank you for sharing!
            </li>

            <li className="button-container">
              <FacebookShareButton url="https://creativetimofficial.github.io/material-dashboard-react">
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <TwitterShareButton
                url="https://creativetimofficial.github.io/material-dashboard-react"
                title="Material Dashboard React - Free Bootstrap Admin Template"
                hashtags={["react", "material-ui"]}
                via="creativetim"
              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
            </li>
            <li className="button-container">
              <GitHubButton
                type="stargazers"
                namespace="creativetimofficial"
                repo="material-dashboard-react"
              />
              <GitHubButton
                type="forks"
                namespace="creativetimofficial"
                repo="material-dashboard-react"
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

FixedPlugin.propTypes = {
  bgImage: PropTypes.string,
  handleFixedClick: PropTypes.func,
  rtlActive: PropTypes.bool,
  fixedClasses: PropTypes.string,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  handleColorClick: PropTypes.func,
  handleImageClick: PropTypes.func
};

export default FixedPlugin;
