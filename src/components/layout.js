/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Footer from './Footer'
import Header from "./Header"
import GlobalStyles from '../GlobalStyles'
import * as Mixins from '../Mixins'

import "./layout.css"

export const Content = styled.div`
  ${Mixins.contentMixin}
`

export const LayoutWrapper = styled.div`
  position: relative;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles/>
      <Header />
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
