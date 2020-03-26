import { Form, Select } from "antd";
import { FormItemProps } from "antd/lib/form";
import React, { FunctionComponent } from "react";

import getLanguageOptions from "../utils/getLanguageOptions";

const languageOptions = getLanguageOptions();

const LanguageSelectFormItem: FunctionComponent<Omit<
  FormItemProps,
  "children"
>> = props => (
  <Form.Item {...props}>
    <Select
      showSearch
      placeholder="Select a language"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.value &&
        languageOptions[option.value].lowerCaseSearchTerms.some(
          searchTerm => searchTerm.indexOf(input.toLowerCase()) >= 0
        )
      }
    >
      {Object.entries(languageOptions).map(([code, { displayName }]) => (
        <Select.Option key={code} value={code}>
          {displayName}
        </Select.Option>
      ))}
    </Select>
  </Form.Item>
);

export default LanguageSelectFormItem;
