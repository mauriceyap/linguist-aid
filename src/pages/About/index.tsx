import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Divider, Popover, Typography } from "antd";
import React, { FunctionComponent, useState } from "react";

const { Title, Paragraph } = Typography;

const About: FunctionComponent<{}> = () => {
  const [isEmailVisible, setEmailVisible] = useState(false);
  return (
    <>
      <Title>About us</Title>
      <Paragraph>
        Linguist Aid was created and is run by a group of volunteers who saw a
        need for this kind of help. As more and more requests come in, and as
        more and more volunteers sign up, the workload for running this project
        increases. If you have a bit of free time and would like to help with
        matching volunteers to community groups, maintaining this website{" "}
        <Popover
          title="We use..."
          content={
            <ul>
              <li>React with Typescript</li>
              <li>
                Netlify to:
                <ul>
                  <li>continuously deploy the site from our GitHub repo</li>
                  <li>handle and store our web form submissions</li>
                </ul>
              </li>
            </ul>
          }
          trigger="click"
        >
          <InfoCircleOutlined />
        </Popover>{" "}
        or making potential volunteers and mutual aid groups know that we exist,
        do drop us a message through our Facebook page or an email!
      </Paragraph>
      <Paragraph strong copyable={{ text: "https://m.me/linguist.aid" }}>
        Message us on Facebook Messenger: m.me/linguist.aid
      </Paragraph>
      {isEmailVisible ? (
        <Paragraph strong copyable={{ text: "contact@linguist-aid.org.uk" }}>
          Email us: contact@linguist-aid.org.uk
        </Paragraph>
      ) : (
        <Button
          type="primary"
          onClick={() => setTimeout(() => setEmailVisible(true), 200)}
        >
          Show email address
        </Button>
      )}
      <Divider />
      <Title level={2}>Some thanks...</Title>
      <Paragraph>
        We'd like to thank:
        <ul>
          <li>
            <strong>Netlify</strong> for hosting this website and powering our
            submission forms for free!
          </li>
          <li>
            <strong>NHS workers</strong> for being amazing.
          </li>
        </ul>
      </Paragraph>
      <Divider />
      <Paragraph type="secondary">
        Linguist Aid was created by{" "}
        <a href="https://mauriceyap.co.uk">Maurice Yap</a> and{" "}
        <a href="https://iamkelv.in">Kelvin Zhang</a>.
      </Paragraph>
    </>
  );
};

export default About;
