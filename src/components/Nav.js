/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { useState } from "react";

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/images/prcpt_logo.png';

import { Container, Wrapper, Row } from './Layout';
import { MobileNavMenuText } from './Typography';

const LeftContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: relative;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding-left: 15px;
  padding-right: 15px;
  width: 33.333%;
  margin-left: 0%;
  margin-right: 0%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  @media screen and (max-width: 992px) { 
    width: 100%;
  }
`;

const LeftInsideContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: relative;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  min-height: 20px;
  min-width: 20px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  @media screen and (max-width: 992px) {
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
`;

const LogoDiv = () => <div css={css`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  min-height: 20px;
  min-width: 20px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: -1px;
  height: 37px;
  width: 234px;
`}>
  <Link 
    to="/"
    css={css`
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      overflow: hidden;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
    `}
  >
    <img 
      src={logo} 
      alt="PRCPT"
      css={css`
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        object-position: 50% 50%;
        height: 100%;
        width: 100%;
        -webkit-box-flex: 0;
        -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        object-fit: contain;
        -webkit-filter: brightness(100%) contrast(100%) saturate(100%) grayscale(0%) hue-rotate(0deg) blur(0px);
        filter: brightness(100%) contrast(100%) saturate(100%) grayscale(0%) hue-rotate(0deg) blur(0px);
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
      `}
    />
  </Link>
</div>;

const MobileHamburgerButton = props => <div css={css`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  min-height: 20px;
  min-width: 20px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: none;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  height: auto;
  width: 150px;

  @media screen and (max-width: 992px) {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: auto;
  }
`}>
  <button css={css`
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    border-width: 2px;
    border-radius: 999px;
    border-color: #6c757d;
    outline: none;
    background: none;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    padding: 0 24px;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    font-family: Epilogue;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    text-transform: none;
    height: 42px;
    border-style: solid;
    color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    
    :hover {
      background: none;
      border-color: #fff;
    }
  `}
  onClick={props.onClick}
  >
    <FontAwesomeIcon icon={faBars} />
  </button>
</div>

const RightContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: relative;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding-left: 15px;
  padding-right: 15px;
  width: 66.667%;
  margin-left: 0%;
  margin-right: 0%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  
  @media screen and (max-width: 992px) { 
    width: 100%;
  }
`;

const RightInsideContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: relative;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  min-height: 20px;
  min-width: 20px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`;

const NavLink = props => <div css={css`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  min-height: 20px;
  min-width: 20px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 30px;
  margin-right: 0px;
  height: auto;
  width: auto;

  @media screen and (max-width: 992px) {
      display: none;
  }
`}>
  <Link
    to={props.to}
    css={css`
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      border-width: 1px;
      border-radius: 6px;
      border-color: transparent;
      outline: none;
      background: none;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      padding: 0;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      font-family: Epilogue;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      text-transform: none;
      height: 42px;
      border-style: solid;
      box-shadow: none;
      color: #fff;
      text-shadow: none;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      transition: color 0.25s;

      :hover {
          color: #95d0c3;
      }
    `}
  >
    {props.text} 
  </Link>
</div>

const MobileNavExitButton = props => <FontAwesomeIcon 
  icon={faXmark}
  onClick = {props.onClick}
  css={css`
    color: #ffffff;
    opacity: 0.75;
    position: absolute;
    top: 50px;
    right: 50px;
    height: 42px;
    transition: opacity 0.2s;
  `}
/>

const MOBILE_NAV_TRANSITION_TIME = 0.25;
const MobileNavOverlay = styled(
  props => <motion.div
    className={props.className}
    variants={{
      visible: { opacity: 0.9 },
      disabled: { opacity: 0 }
    }}
    animate={props.visible ? "visible" : "disabled"}
    transition={{ duration: MOBILE_NAV_TRANSITION_TIME }}
  >
    {props.children}
  </motion.div>
)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: ${props => props.enabled ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #111111;
  z-index: 9999;
`;

const MobileNavSection = props => <div 
  css={css`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
  `}
>
  <Link to={props.to} style={{textDecoration: "none"}}>
    <MobileNavMenuText>{props.text}</MobileNavMenuText>
  </Link>
</div>;

export default function Nav() {
  const [mobileNavOverlayEnabled, setMobileNavOverlayEnabled] = useState(false);
  const [mobileNavOverlayVisible, setMobileNavOverlayVisible] = useState(false);

  const closeNavOverlay = () => {
    setMobileNavOverlayVisible(false);
    setTimeout(() => setMobileNavOverlayEnabled(false), MOBILE_NAV_TRANSITION_TIME * 1000);
  }

  return <>
    <MobileNavOverlay 
      visible={mobileNavOverlayVisible} 
      enabled={mobileNavOverlayEnabled}
    >
      <MobileNavExitButton 
        onClick={closeNavOverlay}
      />
      <MobileNavSection to="/products" text="BROWSE" />
      <MobileNavSection to="/whyus" text="WHY US?" />
      <MobileNavSection to="/contact" text="CONTACT US" />
    </MobileNavOverlay>
    <Wrapper style={{
      paddingTop: "70px", 
      paddingBottom: "40px", 
      position: "absolute",
      zIndex: 1,
      background: "transparent"
    }}>
      <Container>
        <Row>
          <LeftContainer>
            <LeftInsideContainer>
              <LogoDiv />
              <MobileHamburgerButton 
                onClick={() => {
                  setMobileNavOverlayEnabled(true);
                  setMobileNavOverlayVisible(true);
                  console.log("click")
                }}
              />
            </LeftInsideContainer>
          </LeftContainer>     
          <RightContainer>
            <RightInsideContainer>
              <NavLink to="/products" text="BROWSE" />
              <NavLink to="/whyus" text="WHY US?" />
              <NavLink to="/contact" text="CONTACT US" />
            </RightInsideContainer>
          </RightContainer>
        </Row>
      </Container>
    </Wrapper>
  </>
}