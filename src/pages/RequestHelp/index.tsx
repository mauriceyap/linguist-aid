import { Typography } from "antd";
import React, { FunctionComponent } from "react";

const { Title, Paragraph } = Typography;

const RequestHelp: FunctionComponent<{}> = () => {
  return (
    <>
      <Title>Request help from a volunteer</Title>
      <Paragraph strong>
        Since we have only just started, we have not yet started taking requests
        from local mutual aid groups for help from volunteers. We will start
        taking requests before Saturday 28th March 2020, so please come back and
        check later.
      </Paragraph>
      <Paragraph>
        Please be aware that in order to protect the data of volunteers who have
        signed up, we will require verification that you belong to part of a
        local mutual aid group before matching you up. This could involve us
        verifying your email address as one which is used for a mutual aid
        group, or through a Facebook profile which administers a Facebook group.
      </Paragraph>
    </>
  );
};

export default RequestHelp;
