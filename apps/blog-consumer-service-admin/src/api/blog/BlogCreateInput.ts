import { BlogEventCreateNestedManyWithoutBlogsInput } from "./BlogEventCreateNestedManyWithoutBlogsInput";

export type BlogCreateInput = {
  blogEvents?: BlogEventCreateNestedManyWithoutBlogsInput;
};
