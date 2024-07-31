import { SortOrder } from "../../util/SortOrder";

export type BlogEventOrderByInput = {
  blogId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
