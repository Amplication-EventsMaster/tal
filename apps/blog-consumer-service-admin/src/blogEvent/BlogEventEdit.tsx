import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BlogTitle } from "../blog/BlogTitle";

export const BlogEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="blog.id" reference="Blog" label="blog">
          <SelectInput optionText={BlogTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
