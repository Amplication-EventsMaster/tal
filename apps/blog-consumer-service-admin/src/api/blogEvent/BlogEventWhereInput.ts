import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type BlogEventWhereInput = {
  blog?: BlogWhereUniqueInput;
  id?: StringFilter;
};
