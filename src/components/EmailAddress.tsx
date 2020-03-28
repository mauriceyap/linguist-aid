import { Button, Spin, Typography } from "antd";
import React, { FunctionComponent, useState } from "react";

const { Paragraph } = Typography;

const EmailAddress: FunctionComponent = () => {
  const [isShowButtonClicked, setShowButtonClicked] = useState(false);
  const [isEmailLoaded, setEmailLoaded] = useState(false);
  return isShowButtonClicked ? (
    isEmailLoaded ? (
      <Paragraph strong copyable={{ text: "contact@linguist-aid.org.uk" }}>
        Email us: contact@linguist-aid.org.uk
      </Paragraph>
    ) : (
      <Spin />
    )
  ) : (
    <Button
      type="primary"
      onClick={() => {
        setShowButtonClicked(true);
        setTimeout(() => setEmailLoaded(true), 400);
      }}
    >
      Show email address
    </Button>
  );
};

export default EmailAddress;
