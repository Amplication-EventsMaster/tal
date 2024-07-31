import { BlogEvent } from "../blogEvent/BlogEvent";

export type Blog = {
  blogEvents?: Array<BlogEvent>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
