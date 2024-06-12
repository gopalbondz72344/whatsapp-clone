import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CHAT_TITLE_FIELD } from "../chat/ChatTitle";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="chat" source="chat.id" reference="Chat">
          <TextField source={CHAT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="media" source="media" />
        <TextField label="sender" source="sender" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
