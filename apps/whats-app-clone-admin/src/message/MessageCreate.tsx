import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ChatTitle } from "../chat/ChatTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="chat.id" reference="Chat" label="chat">
          <SelectInput optionText={ChatTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <div />
        <TextInput label="sender" source="sender" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
