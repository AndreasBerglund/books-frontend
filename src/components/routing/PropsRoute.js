import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../../context/authContext";

export const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

export const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return renderMergedProps(component, routeProps, rest);
      }}
    />
  );
};

export const PrivateRoute = ({ component, redirectTo, ...rest }) => {
  const isLoggedIn = useAuth().loggedIn;
  return (
    <Route {...rest} render={routeProps => {
      return isLoggedIn ? (
        renderMergedProps(component, routeProps, rest)
      ) : (
        <Redirect to={{
          pathname: redirectTo,
          state: { from: routeProps.location }
        }}/>
      );
    }}/>
  );
};


