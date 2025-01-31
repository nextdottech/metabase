import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logout } from "../auth";

const mapStateToProps = null;

const mapDispatchToProps = {
  logout,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class LogoutApp extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return null;
  }
}

LogoutApp.propTypes = {
  logout: PropTypes.func.isRequired,
};
