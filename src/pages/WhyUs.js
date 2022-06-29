import {
  Wrapper,
  Container,
  Row,
  Col,
  RoundedImage,
} from "../components/Layout";
import { Header1, Header2, Header5, Text } from "../components/Typography";
import { motion } from "framer-motion";

import ManWithGlassesImage from "../assets/images/man_with_glasses.png";
import OptometristImage from "../assets/images/optometrist.jpg";
import USNewsImage from "../assets/images/us_news_logo.png";
import CertifiedImage from "../assets/images/certified_image.png";
import JDPowerImage from "../assets/images/jd_power_image.png";
import ElonMuskTweetImage from "../assets/images/elon_musk_tweet.png";
import RyanReynoldsTweetImage from "../assets/images/ryan_reynolds_tweet.jpg";

const appearOnScreenVariants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

export default function WhyUs(props) {
  return (
    <>
      <Wrapper
        extraStyle={`height: 90vh; background: url(${ManWithGlassesImage}) 50% 40%/cover no-repeat fixed;`}
      >
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
      <Wrapper extraStyle="padding-bottom: 50px;">
        <Container>
          <Row>
            <Col>
              <motion.div
                style={{ padding: "100px 0px" }}
                variants={appearOnScreenVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <Header1 fontWeight="600">State-of-the-art.</Header1>
                <Header5>In every way.</Header5>
              </motion.div>
            </Col>
            <Col
              extraStyle="width: 50%; height: 100%;"
              mobileStyle="width: 100%;"
            >
              <RoundedImage
                src={OptometristImage}
                extraStyle="filter: grayscale(20%); height: auto;"
              />
            </Col>
            <Col extraStyle="width: 45%;" mobileStyle="width: 100%;">
              <Text
                style={{
                  fontSize: "32px",
                  letterSpacing: "-1.5px",
                  lineHeight: "120%",
                  textAlign: "right",
                }}
              >
                State-of-the-art optometrists and optometry equipment along with
                privately manufactured lenses ensure glass lenses give wearers
                the clearest vision possible.
                <br />
                <br />
                Rigorous selection and training process ensures our artisans and
                optometrists provide the best service possible while ensuring
                accessibility.
              </Text>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper extraStyle="padding-bottom: 100px;">
        <Container>
          <Row>
            <Col>
              <motion.div
                variants={appearOnScreenVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                style={{ padding: "100px 0px" }}
              >
                <Header1 fontWeight="600">Trusted by all.</Header1>
                <Header5>For a good reason.</Header5>
              </motion.div>
            </Col>
            <Col extraStyle="justify-content: space-evenly; align-items: center; flex-direction: row; width: 100%; > img { width: 200px; height: auto; }">
              <img src={USNewsImage} style={{height: "90px"}}/>
              <img src={CertifiedImage} />
              <img src={JDPowerImage} />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <Row>
            <Col extraStyle="justify-content: center; flex-direction: column; align-items: center; height: 100%; width: 100%; > * {padding: 20px 0px;} > img {height: 392px; min-width: 20px; border-radius: 30px; }">
              <motion.div
                variants={appearOnScreenVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <Header1 fontWeight="600" extraStyle="text-align: center;">
                  Trusted by people you know.
                </Header1>
              </motion.div>
              <img src={ElonMuskTweetImage} />
              <img src={RyanReynoldsTweetImage} />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
}
