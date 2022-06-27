import { Wrapper, Row, Col, Container } from "../components/Layout";
import { Header5, Header1 } from "../components/Typography";
import { Link } from "react-router-dom";
import { accentColor } from "../config";
import { useEffect } from "react";

export default function PageNotFound() {

  useEffect(() => {
    document.title = "404 | PRCPT";
  }, []);

  return (
    <Wrapper extraStyle="width: 100vw; height: 100vh;">
      <Container>
        <Row>
          <Col extraStyle="display: flex; flex-direction: column; justify-content: center;">
            <Header1 style={{paddingBottom: "10px"}}>404. Page not found.</Header1>
            <Header5 style={{color: "white"}}>
              Check out some <Link to="/products" style={{color: accentColor}}>glasses</Link>. They'll help
              find the page you're looking for.
            </Header5>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
