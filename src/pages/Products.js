/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Container,
  Wrapper,
  Row,
  Col,
  RoundedImage,
} from "../components/Layout";
import { Header1, Header2, Header5, Text } from "../components/Typography";
import { Link } from "react-router-dom";

import PRCPTionIImage from "../assets/images/glasses_2.jpg";
import PRCPTiveIImage from "../assets/images/prcptive-i.jpg";
import PRCPTiveIIImage from "../assets/images/prcptive-ii.jpg";
import { accentColor } from "../config";
import ButtonLink from "../components/ButtonLink";
import { motion } from "framer-motion";

function Product(props) {
  return (
    <Container extraStyle="width: 1200px; margin-bottom: 150px; justify-content: space-between;">
      <div
        css={css`
          width: 489px;
          padding: 0 30px 30px 30px;

          @media screen and (max-width: 992px) {
            width: 100%;
          }
        `}
      >
        <Header2>{props.name}</Header2>
        <Header5
          css={css`
            color: ${accentColor};
            margin-bottom: 53px;
          `}
        >
          {props.model} - {props.price}
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
          {props.description}
        </Text>
        <ButtonLink to={props.learnMoreRedirectLink} text="Learn More" />
      </div>
      <RoundedImage
        height="274px"
        src={props.productImage}
        alt={`${props.name} ${props.model}`}
        extraStyle="width: 47.7%;"
        mobileStyle="width: 100%;"
      />
    </Container>
  );
}

export default function Products() {
  return (
    <>
      <Wrapper extraStyle="height: 80vh;">
        <Container>
          <Row extraStyle="justify-content: center; align-items: center;">
            <Col>
              <Header1>
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { y: 50, opacity: 1 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 2,
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {"This is it. 2 minutes, and you'll see the world like never before.".split(" ").map((c, i) => {
                    return (
                      <motion.span key={c + "-" + i} variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                          opacity: 1,
                          y: 0,
                        }
                      }} transition={{duration: 0.5}}>{c+" "}</motion.span>
                    )
                  })}
                </motion.span>
              </Header1>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper extraStyle="flex-direction: column; align-items: center; justify-content: center; display: flex;">
        <Product
          name="PRCPTion I"
          model="V1 Leopard"
          price="$20"
          description="The peak of optometric research and engineering."
          productImage={PRCPTionIImage}
          learnMoreRedirectLink="prcption-i/v1-leopard"
        />
        <Product
          name="PRCPTive I"
          model="V1 Catalina"
          price="$20"
          description="A beautiful compilation of successes and learned failures."
          productImage={PRCPTiveIImage}
          learnMoreRedirectLink="prcptive-i/v1-catalina"
        />
        <Product
          name="PRCPTive II"
          model="V2 Midnight"
          price="$20"
          description="A new innovation in the vision market."
          productImage={PRCPTiveIIImage}
          learnMoreRedirectLink="prcptive-ii/v2-midnight"
        />
      </Wrapper>
    </>
  );
}
