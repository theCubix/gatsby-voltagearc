import React from 'react'

//import header/footer etc here
import '../sass/main.scss'

const Layout = ({ children, data }) => (
  <div className="dark-background">
      {children()}
  </div>
)

export default Layout

//export const query = graphql`
//  query SampleQuery {}
//`
