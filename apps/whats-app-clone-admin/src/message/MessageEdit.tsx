import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ChatTitle } from "../chat/ChatTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="chat.id" reference="Chat" label="chat">
          <SelectInput optionText={ChatTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <div />
        <TextInput label="sender" source="sender" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
