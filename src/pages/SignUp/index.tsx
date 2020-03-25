import { Divider, Typography } from "antd";
import React, { FunctionComponent } from "react";
import SignUpForm from "./components/SignUpForm";

const { Title, Paragraph, Text } = Typography;
const SignUp: FunctionComponent<{}> = () => {
  return (
    <>
      <Title>Sign up to volunteer!</Title>
      <Paragraph>
        If you would like to offer your language skills to help support
        vulnerable people during this COVID-19 outbreak, please fill in the
        form! If we receive a request from a local mutual aid group for help
        with what you can offer, we'll pass on your details to them.
      </Paragraph>
      <Divider>Some formalities...</Divider>
      <ul>
        <li>
          <Text>By signing up, you're agreeing to volunteer </Text>
          <Text strong>for free.</Text>
        </li>
        <li>
          <Text>
            We will only pass on your details to people who we confirm to be
            organisers within local COVID-19 mutual aid groups.{" "}
            <a href="https://covidmutualaid.org/local-groups/">
              A list of these groups can be found at
              covidmutualaid.org/local-groups.
            </a>{" "}
            We will not share your data with any other people or organisations.
          </Text>
        </li>
        <li>
          <Text>
            You can request for your data to be deleted at any time by sending a
            message to <a href="https://m.me/linguist.aid">our Facebook page</a>{" "}
            or emailing us. You can find our email address through the link at
            the bottom of the page.
          </Text>
        </li>
        <li>
          <Text>
            Your data will be deleted when we cease operating, which will
            hopefully be sooner rather than later.
          </Text>
        </li>
      </ul>
      <Divider />
      <SignUpForm />
    </>
  );
};

export default SignUp;
