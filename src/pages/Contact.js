/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Wrapper, Row, Col, Container } from "../components/Layout";
import { Header5, Header1 } from "../components/Typography";
import { Link, useNavigate } from "react-router-dom";
import { accentColor } from "../config";
import { useEffect, useState } from "react";
import ButtonLink from "../components/ButtonLink";

const TextBoxStyling = css`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: block;
  width: 100%;
  padding: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: default;
  background-color: transparent;
  border-width: 1px;
  border-radius: 8px;
  border-color: #e9ecef;
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
  padding: 0 16px;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  opacity: 1;
  font-family: Epilogue;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  text-transform: none;
  height: 42px;
  border-style: solid;
  color: white;
  margin-bottom: 30px;
`;

export default function Contact() {

  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Contact Us | PRCPT";
  }, []);

  return (
    <Wrapper extraStyle="width: 100vw; height: 100vh; justify-content: space-evenly; align-items: center;">
      <Container extraStyle="justify-content: space-between;">
        <Col
          extraStyle="display: flex; flex-direction: column; justify-content: center; width: 38vw;"
          mobileStyle="width: 100%;"
        >
          <Header1 style={{ paddingBottom: "10px" }}>
            Let's get in touch.
          </Header1>
          <Header5>We look forward to envisioning with you.</Header5>
        </Col>
        <Col
          extraStyle="width: 40vw; > * { margin-bottom: 20px; }"
          mobileStyle="width: 100%;"
        >
          <input css={TextBoxStyling} onChange={e => setName(e.target.value)} placeholder="Name" type="text" />
          <input css={TextBoxStyling} placeholder="Email" type="email" />
          <textarea
            css={TextBoxStyling}
            style={{ height: "150px", paddingTop: "10px" }}
            placeholder="Message"
          />
          <ButtonLink to="/contact/submitted" search={"?name=" + encodeURIComponent(name)} text="Send" />
        </Col>
      </Container>
    </Wrapper>
  );
}
