import { Wrapper, Row, Col, Container } from "../components/Layout";
import { Header5, Header1 } from "../components/Typography";
import { Link } from "react-router-dom";
import { accentColor } from "../config";
import { useEffect } from "react";

export default function PrivacyPolicy() {

  useEffect(() => {
    document.title = "Privacy Policy | PRCPT";
  }, []);

  return (
    <Wrapper extraStyle="width: 100vw; height: 100vh;">
      <Container>
        <Row>
          <Col extraStyle="display: flex; flex-direction: column; justify-content: center;">
            <Header1 style={{paddingBottom: "10px"}}>Privacy Policy</Header1>
            <Header5 style={{color: "white"}}>
              We don't share your data. :)
            </Header5>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
