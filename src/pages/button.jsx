import React from 'react';

import Heading from '../components/Heading';
import ButtonLink from '../components/ButtonLink';

const IndexPage = () => (
  <div style={{
    marginTop: '100px'
  }}>
    <Heading title="Button" letter="B" />
    <ButtonLink dest="/" className="z-1">Home again</ButtonLink>
  </div>
)

export default IndexPage
