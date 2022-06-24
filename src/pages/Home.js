import { Wrapper, Container, Row, Col, Content, Heading } from '../components/Layout';
import { OpeningHeader } from '../components/Typography';

export default function Home() {
  return <>
    <Wrapper style={{
      height: "100vh",
      alignItems: "center"
    }}>
      <Container>
        <Row>
          <Col>
            <Content>
              <Heading>
                <OpeningHeader>
                  Our vision is to help yours.
                </OpeningHeader>
              </Heading>
            </Content>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  </>;
}