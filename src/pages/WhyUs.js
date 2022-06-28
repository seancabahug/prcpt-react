import { Wrapper, Container, Row, Col } from "../components/Layout";
import { Header1, Header2, Header5 } from "../components/Typography";
import { motion } from "framer-motion";

import ManWithGlassesImage from "../assets/images/man_with_glasses.png";

export default function WhyUs(props) {
  return (
    <>
      <Wrapper extraStyle={`height: 90vh; background: url(${ManWithGlassesImage}) 50% 40%/cover no-repeat;`}>
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
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {"Based in Phoenix, Arizona. Our goal is to innovate on vision."
                    .split(" ")
                    .map((c, i) => {
                      return (
                        <motion.span
                          key={c + "-" + i}
                          variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                              opacity: 1,
                              y: 0,
                            },
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {c + " "}
                        </motion.span>
                      );
                    })}
                </motion.span>
              </Header1>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <Row>
            <Col>
              <div style={{padding: "100px 0px"}}>
                <Header1 fontWeight="600">State-of-the-art.</Header1>
                <Header5>In every way.</Header5>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
}
