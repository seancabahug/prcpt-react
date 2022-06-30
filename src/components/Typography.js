import styled from "@emotion/styled";

import { accentColor } from "../config";

export const OpeningHeader = styled.h1`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-family: Epilogue;
  font-weight: 800;
  font-size: 120px;
  line-height: 120%;
  -webkit-letter-spacing: 4px;
  -moz-letter-spacing: 4px;
  -ms-letter-spacing: 4px;
  letter-spacing: 4px;
  text-transform: none;
  color: #fff;
  text-shadow: 0px 5px 10px #00000044;
  text-align: center;

  @media screen and (max-width: 992px) {
    font-size: 4.5em;
  }
`;

export const Header1 = styled.h1`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-family: Epilogue;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "800")};
  font-size: 64px;
  line-height: 120%;
  -webkit-letter-spacing: -1.5px;
  -moz-letter-spacing: -1.5px;
  -ms-letter-spacing: -1.5px;
  letter-spacing: -1.5px;
  text-transform: none;
  color: #fff;
  text-shadow: 0px 5px 10px #00000044;
  text-align: left;
`;

export const MobileNavMenuText = styled.h1`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-family: Epilogue;
  font-weight: 300;
  font-size: 3em;
  -webkit-letter-spacing: 4px;
  -moz-letter-spacing: 4px;
  -ms-letter-spacing: 4px;
  letter-spacing: 15px;
  opacity: 1;
  text-transform: none;
  color: #fff;
  text-shadow: 0px 5px 10px #00000044;
  text-align: center;
  line-height: 120%;
`;

export const Header2 = styled.h2`
  font-family: Epilogue, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
  font-size: 64px;
  line-height: 120%;
  letter-spacing: -1.5px;
  margin-bottom: 0;
  color: #fff;
`;

export const Header5 = styled.h5`
  font-family: Epilogue, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  font-size: 32px;
  letter-spacing: -1.5px;
  margin-bottom: 0;
  color: ${accentColor};

  @media screen and (max-width: 992px) {
    margin-bottom: 90px;
  }
`;

export const Text = styled.p`
  font-family: Epilogue, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  font-size: 22px;
  line-height: 160%;
  letter-spacing: 0px;
  margin-bottom: 0;
  color: rgb(173, 181, 189);
  ${(props) => (props.extraStyle ? props.extraStyle : "")}

  ${(props) =>
    props.mobileStyle
      ? `
    @media screen and (max-width: 992px) {
      ${props.mobileStyle}
    }
  `
      : ""}
`;

export const Header4 = styled.h4`
  font-family: Epilogue, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  font-size: 42px;
  line-height: 120%;
  letter-spacing: -1.5px;
  color: #fff;
  ${(props) => (props.extraStyle ? props.extraStyle : "")}

  ${(props) =>
    props.mobileStyle
      ? `
    @media screen and (max-width: 992px) {
      ${props.mobileStyle}
    }
  `
      : ""}
`;
