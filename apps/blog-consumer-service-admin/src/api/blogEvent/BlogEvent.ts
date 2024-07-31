import { Blog } from "../blog/Blog";

export type BlogEvent = {
  blog?: Blog | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
