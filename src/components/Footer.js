import React from "react"
import styled from 'styled-components'
import Colors from '../Colors'
import { Content } from './Layout'

const FooterWrapper = styled.div`
  background: ${Colors.darkset};
  color: ${Colors.white};
  padding 80px 0 60px 0;
`

const Copyright = styled.p`
  text-align: center;
`

const Footer = ({}) => (
  <FooterWrapper>
    <Content>
      <Copyright white align="center">
        © Jeremy Moyers {new Date().getFullYear()}. All rights reserved.
      </Copyright>
    </Content>
  </FooterWrapper>
)

export default Footer
