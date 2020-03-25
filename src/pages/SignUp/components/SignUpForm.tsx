import { Alert, Form, Input, Row, Col, Button, Select, Switch } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import ISO6391 from "iso-639-1";
import React, { FunctionComponent, useState } from "react";
import excludedLanguages from "../../../const/excludedLanguages";
import encodeFormValues from "../../../utils/encodeFormValues";

const SignUpForm: FunctionComponent<{}> = () => {
  const [form] = Form.useForm();
  const [showDialectInputs, setShowDialectInputs] = useState<
    Record<number, boolean>
  >({});
  const [formSubmittedSuccess, setFormSubmittedSuccess] = useState<
    boolean | null
  >(null);
  const onSubmit = (values: Record<string, any>) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormValues({ "form-name": "sign-up", values })
    })
      .then(() => setFormSubmittedSuccess(true))
      .catch(() => setFormSubmittedSuccess(false));
  };
  return formSubmittedSuccess ? (
    <Alert
      type="success"
      message="Thanks for signing up!"
      description="We've received your details and we'll pass them on to a mutual aid group if they need someone with your skills!"
    />
  ) : (
    <>
      {formSubmittedSuccess === false && (
        <Alert
          message="Something went wrong..."
          description={
            "Thanks for trying to sign up, but unfortunately, something went wrong when trying to send us your details. " +
            "Maybe your internet connection dropped out? " +
            "If this keeps happening, please drop us an email or a Facebook message, and we'll try and fix it! " +
            "There's a link at the bottom of the page."
          }
          type="error"
        />
      )}
      <Form
        layout="vertical"
        form={form}
        name="sign-up"
        size="large"
        onFinish={onSubmit}
      >
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Your name (Roman/English)"
              name="name-roman"
              rules={[
                {
                  required: true,
                  message: "Please enter your name in Roman (Latin) characters"
                }
              ]}
            >
              <Input placeholder="e.g. Boris Yeltsin, Jackie Chan" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Your name in its native script, if it's different"
              name="name-native-script"
              rules={[]}
            >
              <Input placeholder="e.g. Борис Ельцин, 陳港生" />
            </Form.Item>
          </Col>
        </Row>
        <Form.List name="languages">
          {(fields, { add, remove }) => (
            <div>
              {fields.map((field, index) => (
                <Row gutter={[16, 16]} key={field.key}>
                  <Col xs={11}>
                    <Form.Item
                      name={[field.name, "language"]}
                      validateTrigger={["onChange", "onBlur"]}
                      label={`Foreign language ${index + 1}`}
                      rules={[
                        {
                          required: true,
                          message: "Please select a language"
                        }
                      ]}
                    >
                      <Select
                        showSearch
                        placeholder="Select a language"
                        optionFilterProp="children"
                        filterOption={(input, option) => {
                          const searchTerm = input.toLowerCase();
                          return (
                            option?.value &&
                            (ISO6391.getName(option.value)
                              ?.toLowerCase()
                              .indexOf(searchTerm) >= 0 ||
                              ISO6391.getNativeName(option.value)
                                ?.toLowerCase()
                                .indexOf(searchTerm) >= 0)
                          );
                        }}
                      >
                        {ISO6391.getAllCodes()
                          .filter(code => !excludedLanguages.includes(code))
                          .map(code => (
                            <Select.Option key={code} value={code}>
                              {ISO6391.getName(code)} -{" "}
                              {ISO6391.getNativeName(code)}
                            </Select.Option>
                          ))}
                      </Select>
                    </Form.Item>
                    <Row>
                      <Switch
                        unCheckedChildren="Dialect"
                        checkedChildren="Dialect"
                        onChange={checked =>
                          setShowDialectInputs({
                            ...showDialectInputs,
                            [field.key]: checked
                          })
                        }
                      />
                      {showDialectInputs[field.key] && (
                        <Form.Item name={[field.name, "dialect"]} rules={[]}>
                          <Input
                            placeholder="e.g. Cantonese"
                            style={{ marginLeft: 12 }}
                          />
                        </Form.Item>
                      )}
                    </Row>
                  </Col>
                  <Col xs={11}>
                    <Form.Item
                      name={[field.name, "skills"]}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          message: "Please select your skills in this language"
                        }
                      ]}
                      label="Skills in this language"
                    >
                      <Select defaultValue="both">
                        <Select.Option value="both">
                          Speak, read and write
                        </Select.Option>
                        <Select.Option value="speak">Speak only</Select.Option>
                        <Select.Option value="read-write">
                          Read and write only
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={2}>
                    {fields.length > 1 && (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    )}
                  </Col>
                </Row>
              ))}
              <Form.Item
                label={fields.length === 0 ? "Your foreign languages" : ""}
              >
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                >
                  <PlusOutlined /> Add a foreign language
                </Button>
              </Form.Item>
            </div>
          )}
        </Form.List>
        <Form.Item
          label="Your email address"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email address"
            }
          ]}
        >
          <Input placeholder="e.g. yes@gmail.com" type="email" />
        </Form.Item>
        <Form.Item
          label="Your WhatsApp number (optional)"
          name="whatsapp"
          rules={[]}
        >
          <Input placeholder="e.g. +44 118 999 8819" />
        </Form.Item>
        <Form.Item
          label="Your Facebook Messenger username (optional)"
          name="facebook-messenger"
          rules={[]}
        >
          <Input placeholder="e.g. john.smith3987897" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign me up!
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUpForm;
