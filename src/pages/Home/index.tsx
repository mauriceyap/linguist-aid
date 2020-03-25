import { Button, Col, Divider, Modal, Row, Typography } from "antd";
import React, { FunctionComponent, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

import "./home.scss";

const { Title, Paragraph } = Typography;

const Home: FunctionComponent<{}> = () => {
  const history = useHistory();
  useLayoutEffect(() => {
    Modal.info({
      title: "This website isn't finished yet!",
      content: (
        <div>
          <p>
            This is a work-in-progress, but you're welcome to have a look
            around!
          </p>
        </div>
      )
    });
  });
  const goToSignUp = () => history.push("/sign-up");
  const goToRequestHelp = () => history.push("/request-help");

  return (
    <>
      <div className="hero">
        <div className="hero__title">Linguist Aid</div>
        <div className="hero__content">
          During this Covid-19 outbreak, we're helping to connect{" "}
          <strong>multi-lingual volunteers</strong> to{" "}
          <strong>mutual aid groups</strong> around the UK to provide free help
          with:
          <ul>
            <li>translating leaflets, flyers and posters</li>
            <li>interpreting for vulnerable people</li>
            <li>
              chatting to people on the phone who feel alone and speak little or
              no English
            </li>
          </ul>
        </div>
      </div>
      <Divider />
      <Row gutter={16}>
        <Col xs={24} xl={12}>
          <Title level={4}>
            I speak, read or write a foreign language and want to help!
          </Title>
          <Button type="primary" size="large" onClick={goToSignUp}>
            Sign up as a volunteer
          </Button>
          <Divider />
          <Title level={4}>
            I'm an organiser in a mutual aid group and we need help with foreign
            languages!
          </Title>
          <Button type="default" size="large" onClick={goToRequestHelp}>
            Request help
          </Button>
        </Col>
        <Col xs={24} xl={12}>
          <Title level={3}>A bit more about what we're doing...</Title>
          <Paragraph>
            Since the Covid-19 outbreak in the UK began, thousands of local
            mutual aid groups have been set up to serve vulnerable people in
            communities across the country. Many of these groups serve
            vulnerable people who speak little or no English.
          </Paragraph>
          <Paragraph>
            Linguist Aid is a project to connect together volunteers who are
            literate in, or fluently speak one or more foreign languages, with
            mutual aid groups who need help to translate materials or interpret
            to or for vulnerable people.
          </Paragraph>
          <Paragraph strong>
            We are only seeking volunteers to provide this specific type of help
            remotely. We strongly encourage you to join your local mutual aid
            group if you are also able and willing to provide other help around
            where you live.
          </Paragraph>
          <Paragraph>
            <a href="https://covidmutualaid.org/">
              You can find your local mutual aid group on the Covid-19 Mutual
              Aid UK website.
            </a>
          </Paragraph>
        </Col>
      </Row>
    </>
  );
};

export default Home;
