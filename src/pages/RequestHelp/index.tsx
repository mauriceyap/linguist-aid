import { Typography } from "antd";
import React, { FunctionComponent } from "react";
import RequestHelpForm from "./components/RequestHelpForm";

const { Title, Paragraph } = Typography;

const RequestHelp: FunctionComponent<{}> = () => (
  <>
    <Title>Request help from a volunteer</Title>
    <Paragraph>
      Send us a request using this form if your local group or charitable
      organisation has a need for a volunteer to translate or interpret. We'll
      do our best to find you a match!
    </Paragraph>
    <RequestHelpForm />
  </>
);

export default RequestHelp;
