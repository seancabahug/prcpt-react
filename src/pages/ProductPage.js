/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Container,
  Wrapper,
  Row,
  Col,
  RoundedImage,
  LessRoundedImage,
} from "../components/Layout";
import { Header1, Header2, Header5, Text } from "../components/Typography";
import { Link } from "react-router-dom";
import ApplePayImage from "../assets/images/apple_pay.png";
import GooglePayImage from "../assets/images/google_pay.png";
import { useEffect } from "react";

import { accentColor } from "../config";
import ButtonLink from "../components/ButtonLink";

export default function ProductPage({ name, model, price, description, productImage }) {

  useEffect(() => {
    document.title = name + " | PRCPT";
  }, [name]);

  return (
    <Wrapper extraStyle="width: 100vw; height: 100vh; align-items: center;">
      <Container extraStyle="width: 1200px; justify-content: space-between;">
        <div
          css={css`
            width: 489px;
            padding: 0 30px 30px 30px;

            @media screen and (max-width: 992px) {
              width: 100%;
            }
          `}
        >
          <Header2>{name}</Header2>
          <Header5
            css={css`
              color: ${accentColor};
              margin-bottom: 53px;
            `}
          >
            {model} - {price}
          </Header5>
          <Text
            css={css`
              font-size: 20px;
              letter-spacing: 1px;
              line-height: 30px;
              font-weight: 300;
              margin-bottom: 20px;
            `}
          >
            {description}
          </Text>
          <Link to="/purchase/complete">
            <LessRoundedImage src={ApplePayImage} />
            <LessRoundedImage src={GooglePayImage} />
          </Link>
        </div>
        <RoundedImage
          height="274px"
          src={productImage}
          alt={`${name} ${model}`}
          extraStyle="width: 47.7%;"
          mobileStyle="width: 100%;"
        />
      </Container>
    </Wrapper>
  );
}
