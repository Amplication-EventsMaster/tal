import { BlogEventListRelationFilter } from "../blogEvent/BlogEventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlogWhereInput = {
  blogEvents?: BlogEventListRelationFilter;
  id?: StringFilter;
};
