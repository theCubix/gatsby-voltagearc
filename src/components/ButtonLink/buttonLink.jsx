import React from 'react';
import Link from 'gatsby-link';

const ButtonLink = ({ children, dest, className }) => (
  <Link to={dest} className={className}>{children}</Link>
);

export default ButtonLink;