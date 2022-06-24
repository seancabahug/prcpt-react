import { Wrapper, Container, Row, Col, Content, Heading } from '../components/Layout';
import { motion, useMotionValue, MotionConfig } from 'framer-motion';
import useMeasure from "react-use-measure";
import { OpeningHeader } from '../components/Typography';
import { Opening3DScene } from '../components/Opening3DScene';
import { useState } from 'react';
import { transition } from '../config';

export default function Home() {
  const [ref, bounds] = useMeasure({scroll: false});
  const [isHover, setIsHover] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const hoverTransitionRatio = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return <>
    <Wrapper style={{ height: "100vh", alignItems: "center" }}>
      <MotionConfig transition={transition}>
        <Opening3DScene isHover={isHover} mouseX={mouseX} mouseY={mouseY} hoverTransitionRatio={hoverTransitionRatio} />
        <Container>
          <Row>
            <Col>
              <Content>
                <Heading>
                  <motion.div
                    ref={ref}
                    variants={{
                      rest: { scale: 1, hoverTransitionRatio: 0 },
                      hover: { scale: 1.15, hoverTransitionRatio: 1 }
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
                    onPointerMove={e => {
                      mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                      mouseY.set(e.clientY - bounds.y - bounds.height / 2);
                    }}
                  >
                    <OpeningHeader>
                      Our vision is to help yours.
                    </OpeningHeader>
                  </motion.div>
                </Heading>
              </Content>
            </Col>
          </Row>
        </Container>
      </MotionConfig>
    </Wrapper>
  </>;
}