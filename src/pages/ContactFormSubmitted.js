import { Wrapper, Row, Col, Container } from "../components/Layout";
import { Header5, Header1 } from "../components/Typography";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { accentColor } from "../config";
import { useEffect } from "react";

export default function ContactFormSubmitted() {

  let [searchParams, setSearchParams] = useSearchParams();
  let name = searchParams.get("name");

  useEffect(() => {
    document.title = "Submitted | PRCPT";
  }, []);

  return (
    <Wrapper extraStyle="width: 100vw; height: 100vh;">
      <Container>
        <Row>
          <Col extraStyle="display: flex; flex-direction: column; justify-content: center;">
            <Header1 style={{paddingBottom: "10px"}}>Thank you for your feedback{name ? ", " + name : ""}!</Header1>
            <Header5 style={{color: "white"}}>
              Your feedback is extremely important to us.
            </Header5>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
