/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Container, Row, Wrapper, Col } from "./Layout";
import { Text } from "./Typography";

export default function Footer() {
  return (
    <Wrapper
      mobileStyle="padding-top: 27px; padding-bottom: 72px;"
      extraStyle="padding-top: 122px; padding-bottom: 50px;"
    >
      <Container>
        <Row>
          <Col>
            <div
              css={css`
                position: relative;
                flex-direction: column;
                align-items: stretch;
                justify-content: flex-start;
                flex-wrap: nowrap;
                min-height: 20px;
                min-width: 20px;
                flex-shrink: 0;
                display: flex;
                margin-bottom: 30px;
              `}
            >
              <Text style={{ textAlign: "center" }}>
                Envisioning our future with you.
              </Text>
            </div>
          </Col>
          <Col
            extraStyle="width: 16.667%; justify-content: center; align-items: center; display: flex;"
            mobileStyle="width: 100%;"
          >
            <Text style={{ textAlign: "center" }}>© 2022 PRCPT</Text>
          </Col>
          <Col
            extraStyle="width: 66.666%; justify-content: center;"
            mobileStyle="width: 100%;"
          >
            <div
              css={css`
                flex-direction: row;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 30px;
                margin-bottom: 30px;
              `}
            >
              {[
                ["Privacy Policy", "/privacy"],
                ["Cookies", "/cookies"],
                ["Contact Us", "/contact"],
              ].map((x, i, a) => (
                <Link
                  key={i}
                  to={x[1]}
                  css={css`
                    text-decoration: none;
                    margin-right: ${i === a.length - 1 ? "0px" : "30px"};
                  `}
                >
                  <Text>{x[0]}</Text>
                </Link>
              ))}
            </div>
          </Col>
          <Col
            extraStyle="width: 16.667%; display: flex; justify-content: center; align-items: center;"
            mobileStyle="width: 100%;"
          >
            <div
              css={css`
                display: flex;
                flex-direction: column;
                > * {
                  text-decoration: none;
                  margin-bottom: 5px;
                }
              `}
            >
              <a href="https://twitter.com/PRCPTvision">
                <Text>
                  <FontAwesomeIcon icon={faTwitter} /> PRCPTvision
                </Text>
              </a>
              <a href="https://instagram.com/PRCPTvision">
                <Text>
                  <FontAwesomeIcon icon={faInstagram} /> PRCPTvision
                </Text>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
