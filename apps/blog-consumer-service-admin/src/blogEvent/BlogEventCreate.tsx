import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BlogTitle } from "../blog/BlogTitle";

export const BlogEventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="blog.id" reference="Blog" label="blog">
          <SelectInput optionText={BlogTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
