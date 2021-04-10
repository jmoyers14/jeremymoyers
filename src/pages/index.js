import React from 'react'
import styled from 'styled-components'
import Layout, { Content } from '../components/Layout'
import Placeholder from '../images/placeholder.png'
import SpecialtyProduce from '../images/SpecialtyProduce.jpg'
import Trace from '../images/Trace.jpg'
import Avagen from '../images/Avagen.jpg'
import Bump from '../images/Bump.jpg'
import Buffini from '../images/Buffini.jpg'
import Mama from '../images/Mama.jpg'
import Viasat from '../images/Viasat.jpg'
import { HireMe, LinkButton } from '../components/Button.js'
import HireMePopup from '../components/HireMePopup.js'
import { media } from '../MediaQueries'
import Colors from '../Colors'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { darken } from 'polished'

import * as Mixins from '../Mixins'
import * as t from '../Typography'
import * as S from '../Strings'
import * as L from '../Links'

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Full Name" className="avatar" />
            <t.H1 primary align="center">
              {S.FULL_NAME}
            </t.H1>
            <t.LargeP align="center" max45>
              {S.SHORT_BIO}
            </t.LargeP>
            <HireMe large onClick={this.openContactPopup} book>
              {S.CONTACT_BUTTON}
            </HireMe>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold className="portfolio">
              {S.PORTFOLIO_LABEL}
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Viasat} alt="Trace Title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>{S.VIASAT_TITLE}</t.H2>
                <t.P>{S.VIASAT_TECHNOLOGY}</t.P>
                <t.P>{S.VIASAT_DESCRIPTION}</t.P>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>{S.MAMA_TITLE}</t.H2>
                <t.P>{S.MAMA_TECHNOLOGY}</t.P>
                <t.P>{S.MAMA_DESCRIPTION}</t.P>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Mama} alt="SpecialtyProduce title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Trace} alt="Trace Title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>{S.TRACE_TITLE}</t.H2>
                <t.P>{S.TRACE_TECHNOLOGY}</t.P>
                <t.P>{S.TRACE_DESCRIPTION}</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href={L.TRACE}>
                  {S.APP_STORE_LINK}
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>{S.SP_TITLE}</t.H2>
                <t.P>{S.SP_TECHNOLOGY}</t.P>
                <t.P>{S.SP_DESCRIPTION}</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href={L.SP}>
                  {S.APP_STORE_LINK}
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={SpecialtyProduce} alt="SpecialtyProduce title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Avagen} alt="Avagen title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>{S.AVAGEN_TITLE}</t.H2>
                <t.P>{S.AVAGEN_TECHNOLOGY}</t.P>
                <t.P>{S.AVAGEN_DESCRIPTION}</t.P>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>{S.BUMP_TITLE}</t.H2>
                <t.P>{S.BUMP_TECHNOLOGY}</t.P>
                <t.P>{S.BUMP_DESCRIPTION}</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href={L.BUMP}>
                  {S.APP_STORE_LINK}
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Bump} alt="Bump title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Buffini} alt="Buffini title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>{S.BUFFINI_TITLE}</t.H2>
                <t.P>{S.BUFFINI_TECHNOLOGY}</t.P>
                <t.P>{S.BUFFINI_DESCRIPTION}</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href={L.BUFFINI}>
                  {S.APP_STORE_LINK}
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <WorkWithMe>
            <t.H1 green>Get in touch with me</t.H1>
            <t.LargeP>
              Fancy working with me? Contact me for more info!{' '}
            </t.LargeP>
            <HireMe onClick={this.openContactPopup} book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
