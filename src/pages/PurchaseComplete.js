import { Wrapper, Row, Col, Container } from "../components/Layout";
import { Header5, Header1 } from "../components/Typography";
import { Link } from "react-router-dom";
import { accentColor } from "../config";

export default function PurchaseComplete() {
  return (
    <Wrapper extraStyle="width: 100vw; height: 100vh;">
      <Container>
        <Row>
          <Col extraStyle="display: flex; flex-direction: column; justify-content: center;">
            <Header1 style={{paddingBottom: "10px"}}>Purchase complete. Welcome.</Header1>
            <Header5 style={{color: "white"}}>
              You just made the best decision for your vision.
            </Header5>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
