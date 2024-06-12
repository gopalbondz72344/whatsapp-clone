import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  contactUser?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  owner?: SortOrder;
  updatedAt?: SortOrder;
};
