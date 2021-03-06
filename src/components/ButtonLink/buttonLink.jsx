import React, { Component } from 'react';
import Link from 'gatsby-link';

import ArrowIcon from '-!babel!svg-react-loader?name=Arrow!./arrow-long-thin-right.svg';

const ButtonLink = ({ children, dest, className }) => (
  <Link to={dest} className={`link btn-link ${className}`}>
    <span className="btn-link__text">{children}</span> <ArrowIcon className="btn-link__arrow" />
    <div className="btn-link__backdrop"></div>
  </Link>
);

export default ButtonLink;