import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ContactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contactUser" source="contactUser" />
        <TextInput label="owner" source="owner" />
      </SimpleForm>
    </Create>
  );
};
