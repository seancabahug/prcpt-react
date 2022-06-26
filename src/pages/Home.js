/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Wrapper,
  Container,
  Row,
  Col,
  Content,
  Heading,
  RoundedImage,
  LessRoundedImage,
} from "../components/Layout";
import { motion, useMotionValue, MotionConfig } from "framer-motion";
import useMeasure from "react-use-measure";
import {
  Header2,
  Header4,
  Header5,
  OpeningHeader,
  Text,
} from "../components/Typography";
import { Opening3DScene } from "../components/3d/Opening3DScene";
import { useState, useEffect } from "react";
import { accentColor, transition } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import GlassesImage1 from "../assets/images/glasses_1.jpg";
import GlassesImage2 from "../assets/images/glasses_2.jpg";
import GlassesImage3 from "../assets/images/glasses_3.jpg";
import GlassesImage4 from "../assets/images/glasses_4.jpg";

export default function Home() {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 992px)").matches
  );

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    //var sensor;
    if (isMobile) {
      setIsHover(true);
      /*Promise.all([
        navigator.permissions.query({ name: "accelerometer" }),
        navigator.permissions.query({ name: "magnetometer" }),
        navigator.permissions.query({ name: "gyroscope" }),
      ]).then((results) => {
        if (results.every((result) => result.state === "granted")) {
          sensor = new window.AbsoluteOrientationSensor({ frequency: 60 });
          sensor.onreading = () => {
            mouseX.set(sensor.quaternion[0] * orientationSensorInputSensitivity);
            mouseY.set(sensor.quaternion[1] * orientationSensorInputSensitivity);
          }
          sensor.start();
        } else {
          console.log("No permissions to use AbsoluteOrientationSensor.");
        }
      });*/
    }
    /*return () => {
      if (sensor) sensor.stop();
    };*/
  }, []);

  const appearOnScreenVariants = {
    offscreen: {
      y: -100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <Wrapper style={{ height: "100vh", alignItems: "center" }}>
        <MotionConfig transition={transition}>
          <Opening3DScene isHover={isHover} mouseX={mouseX} mouseY={mouseY} />
          <Container>
            <Row>
              <Col>
                <Content>
                  <Heading>
                    <motion.div
                      ref={ref}
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.15 },
                      }}
                      animate={isHover ? "hover" : "rest"}
                      onHoverStart={() => {
                        resetMousePosition();
                        setIsHover(true);
                      }}
                      onHoverEnd={() => {
                        resetMousePosition();
                        setIsHover(false);
                      }}
                      onPointerMove={(e) => {
                        mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                        mouseY.set(e.clientY - bounds.y - bounds.height / 2);
                      }}
                    >
                      <OpeningHeader>
                        Our vision is
                        <span
                          css={css`
                            filter: blur(${isHover ? "0px" : "10px"});
                            transition: filter 1s;
                          `}
                        >
                          {" "}
                          to help yours
                        </span>
                        .
                      </OpeningHeader>
                    </motion.div>
                  </Heading>
                </Content>
              </Col>
            </Row>
          </Container>
          <motion.div
            css={css`
              position: absolute;
              bottom: 150px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              color: white;
              filter: drop-shadow(0px 2px 5px #00000096);
            `}
          >
            <p
              css={css`
                font-family: Epilogue, sans-serif;
                font-weight: 400;
                letter-spacing: 5px;
              `}
            >
              SCROLL TO LEARN MORE
            </p>
            <FontAwesomeIcon
              icon={faChevronDown}
              css={css`
                font-size: 1.2em;
                padding-top: 10px;
              `}
            />
          </motion.div>
        </MotionConfig>
      </Wrapper>
      <Wrapper style={{ paddingTop: "120px", paddingBottom: "192px" }}>
        <Container>
          <Row>
            <Col
              extraStyle="margin-right: 16.667%; width: 33.33%;"
              mobileStyle="width: 100%; margin-right: 0%;"
            >
              <motion.div
                variants={appearOnScreenVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <Header2>PRCPTion I</Header2>
                <Header5 style={{ marginBottom: "160px" }}>V1 Leopard</Header5>
              </motion.div>
              <RoundedImage
                height={"197px"}
                src={GlassesImage1}
                alt="Glasses"
              />
              <div
                css={css`
                  box-sizing: border-box;
                  margin: 0;
                  min-width: 0;
                  -webkit-flex-direction: column;
                  -ms-flex-direction: column;
                  flex-direction: column;
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
                  margin-bottom: 30px;
                  margin-left: 0px;
                  margin-right: 85px;
                  height: auto;
                  width: auto;
                `}
              >
                <Text>
                  A product of extensive optometric research and decades of
                  meticulous engineering, the PRCPTion I V1 Leopard brings
                  diamonds among dirt to our table of competitors.
                </Text>
              </div>
            </Col>
            <Col extraStyle="width: 50%;" mobileStyle="width: 100%;">
              <motion.div
                variants={appearOnScreenVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <Header4
                  extraStyle="margin-top: 123px; margin-bottom: 120px;"
                  mobileStyle="margin-top: 80px;"
                >
                  The pinnacle of spectacle engineering. See for yourself.
                </Header4>
              </motion.div>
              <RoundedImage
                alt="Glasses"
                src={GlassesImage2}
                height={"400px"}
              />
              <div
                css={css`
                  box-sizing: border-box;
                  margin: 0;
                  min-width: 0;
                  -webkit-flex-direction: column;
                  -ms-flex-direction: column;
                  flex-direction: column;
                  min-height: 20px;
                  min-width: 20px;
                  -webkit-flex-shrink: 0;
                  -ms-flex-negative: 0;
                  flex-shrink: 0;
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  margin-top: 7px;
                  margin-bottom: 0px;
                  margin-left: 0px;
                  margin-right: 171px;
                  height: auto;
                  width: auto;
                `}
              >
                <Text>
                  The perfect balance between resplendent style and accessible
                  function, capturing the essence of your beauty and the world's
                  beauty. They say no frame is perfect; they are liars.
                </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <Row>
            <Col
              extraStyle="width: 41.667%; margin-right: 8.33%;"
              mobileStyle="width: 100%; margin-right: 0;"
            >
              <LessRoundedImage
                src={GlassesImage3}
                alt="Glasses"
                height="315px"
              />
              <div
                css={css`
                  margin-top: 50px;
                  margin-bottom: 30px;
                `}
              >
                <Header4 extraStyle={`color: ${accentColor};`}>
                  Warranty and Assistance
                </Header4>
              </div>
              <div
                css={css`
                  @media screen and (max-width: 992px) {
                    margin-bottom: 80px;
                  }
                `}
              >
                <Text style={{ marginBottom: "10px" }}>
                  Monthly workshops, constant manager meetings and feedback
                  polls ensure the store environment is friendly and welcoming
                  for both customer and worker.
                </Text>
                <Text>Also, you got one year to step on your glasses. Go.</Text>
              </div>
            </Col>
            <Col
              extraStyle="width: 41.667%; margin-left: 8.33%;"
              mobileStyle="width: 100%; margin-left: 0;"
            >
              <LessRoundedImage
                src={GlassesImage4}
                alt="Glasses"
                height="389px"
              />
              <div
                css={css`
                  margin-top: 50px;
                  margin-bottom: 30px;
                `}
              >
                <Header4 extraStyle={`color: ${accentColor};`}>
                  PRCPTcare
                </Header4>
              </div>
              <div
                css={css`
                  @media screen and (max-width: 992px) {
                    margin-bottom: 80px;
                  }
                `}
              >
                <Text>
                  Don’t let life take your sight away, on demand support at our
                  various locations can fit you with temporary glasses while we
                  polish up your damaged ones. We see further than others, if
                  you can’t reach one our locations we’ll ship you a temporary
                  pair on-the-day and we’ll discount a new pair.
                </Text>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
}
