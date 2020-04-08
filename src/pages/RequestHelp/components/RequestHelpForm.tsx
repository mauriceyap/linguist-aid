import { Alert, Form, Input, Button, Radio, Typography } from "antd";
import React, { FunctionComponent, useState } from "react";

import LanguageSelectFormItem from "../../../components/LanguageSelectFormItem";
import encodeFormValues from "../../../utils/encodeFormValues";
import { RadioChangeEvent } from "antd/lib/radio";

const { Paragraph, Text } = Typography;

type TVerificationMethod = "facebook" | "email";

const VerificationAddressLabel: Record<TVerificationMethod, string> = {
  facebook: "URL to your Facebook profile",
  email: "Your email address",
};

const VerificationAddressRequiredMessage: Record<
  TVerificationMethod,
  string
> = {
  facebook: "Please enter the URL for your Facebook profile",
  email: "Please enter your email address",
};

const VerificationAddressPlaceholder: Record<TVerificationMethod, string> = {
  facebook: "e.g. facebook.com/zuck",
  email: "e.g. yes@gmail.com",
};

const VerificationAddressInputType: Record<TVerificationMethod, string> = {
  facebook: "text",
  email: "email",
};

const VerificationLinkLabel: Record<TVerificationMethod, string> = {
  facebook: "URL to your mutual aid group's Facebook group",
  email: "URL to your organisation's website, or other site",
};

const VerificationLinkRequiredMessage: Record<TVerificationMethod, string> = {
  facebook: "Please enter the URL for your mutual aid group's Facebook group",
  email: "Please enter your mutual aid group or organisation's website",
};

const VerificationLinkPlaceholder: Record<TVerificationMethod, string> = {
  facebook: "e.g. facebook.com/groups/my-local-group",
  email: "e.g. www.brownswoodmutualaid.org.uk",
};

const RequestHelpForm: FunctionComponent<{}> = () => {
  const [form] = Form.useForm();
  const [formSubmittedSuccess, setFormSubmittedSuccess] = useState<
    boolean | null
  >(null);
  const [
    verificationMethod,
    setVerificationMethod,
  ] = useState<TVerificationMethod | null>(null);

  const onVerificationMethodChange = ({
    target: { value },
  }: RadioChangeEvent) => setVerificationMethod(value as TVerificationMethod);

  const onSubmit = (values: Record<string, any>) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormValues({
        "form-name": "request-help",
        ...values,
      }),
    })
      .then((response) => setFormSubmittedSuccess(response.ok))
      .catch(() => setFormSubmittedSuccess(false));
  };

  return formSubmittedSuccess ? (
    <Alert
      type="success"
      message="We've received your request"
      description="If we have a volunteer who matches your requirements, we'll be in touch!"
      showIcon
    />
  ) : (
    <>
      {formSubmittedSuccess === false && (
        <Alert
          message="Something went wrong..."
          description={
            "Unfortunately, something went wrong when trying to send us your request. " +
            "Maybe your internet connection dropped out? " +
            "If this keeps happening, please drop us an email or a Facebook message, and we'll try and fix it! " +
            "There's a link to find our email address at the bottom of the page."
          }
          type="error"
          showIcon
        />
      )}
      <Form
        layout="vertical"
        form={form}
        name="request-help"
        size="large"
        onFinish={onSubmit}
      >
        <Alert
          message={
            <Paragraph>
              If you are requesting help for a local mutual aid group, it must
              be listed on{" "}
              <a href="https://covidmutualaid.org/local-groups/">
                the website of COVID-19 Mutual Aid UK
              </a>
              . You can register your group on the website if it isn't on the
              list.
            </Paragraph>
          }
          type="info"
          showIcon
        />
        <Form.Item
          label="Your mutual aid group or organisation"
          name="mutual-aid-group"
          rules={[
            {
              required: true,
              message:
                "Please enter the name of your mutual aid group or organisation",
            },
          ]}
        >
          <Input placeholder="e.g. Sandy Lane Covid-19 Mutual Aid" />
        </Form.Item>
        <Form.Item
          label="Your name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
          ]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Alert
          message={
            <>
              <Paragraph>
                Before sharing information about volunteers who have signed up,
                we need to verify that you are a member of a mutual aid group,
                or work for a charitable organisation. We can do this in one of
                the following ways:
              </Paragraph>
              <ul>
                <li>
                  <Text strong>Send a message</Text>
                  <Text>
                    {" "}
                    to{" "}
                    <a href="https://fb.me/linguist.aid">
                      our Facebook Page
                    </a>{" "}
                    from a profile which is a member of the Facebook group for
                    your mutual aid group.
                  </Text>
                </li>
                <li>
                  <Text strong>Reply to an email</Text>
                  <Text>
                    {" "}
                    from us from an email address which is listed on the
                    website, Facebook page or other official account or listing
                    for your local mutual aid group or organisation.
                  </Text>
                </li>
              </ul>
            </>
          }
          type="info"
          showIcon
        />
        <Form.Item
          label="I want to be verified using..."
          name="verification-method"
          rules={[
            {
              required: true,
              message: "Please select a verification method",
            },
          ]}
        >
          <Radio.Group onChange={onVerificationMethodChange}>
            <Radio.Button value="facebook">Facebook</Radio.Button>
            <Radio.Button value="email">Email</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {verificationMethod && (
          <>
            <Form.Item
              label={VerificationAddressLabel[verificationMethod]}
              name="verification-address"
              rules={[
                {
                  required: true,
                  message:
                    VerificationAddressRequiredMessage[verificationMethod],
                },
              ]}
            >
              <Input
                placeholder={VerificationAddressPlaceholder[verificationMethod]}
                type={VerificationAddressInputType[verificationMethod]}
              />
            </Form.Item>
            <Form.Item
              label={VerificationLinkLabel[verificationMethod]}
              name="verification-link"
              rules={[
                {
                  required: true,
                  message: VerificationLinkRequiredMessage[verificationMethod],
                },
              ]}
            >
              <Input
                placeholder={VerificationLinkPlaceholder[verificationMethod]}
              />
            </Form.Item>
          </>
        )}
        <LanguageSelectFormItem
          name="language"
          validateTrigger={["onChange", "onBlur"]}
          label="Language required"
          rules={[
            {
              required: true,
              message: "Please select a language",
            },
          ]}
        />
        <Form.Item
          label="We need someone who can..."
          name="skills"
          rules={[
            {
              required: true,
              message: "Please select the language skills needed",
            },
          ]}
        >
          <Radio.Group>
            <Radio.Button value="speak">Speak</Radio.Button>
            <Radio.Button value="read-write">Read and write</Radio.Button>
            <Radio.Button value="both">Speak, read and write</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Anything else you want to let us know? (optional)"
          name="anything-else"
          rules={[]}
        >
          <Input.TextArea placeholder="e.g. any further information or questions (feel free to link documents using Google Docs, Dropbox etc.)" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Request a volunteer!
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RequestHelpForm;
