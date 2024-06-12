import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  chatParticipants?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  participants?: SortOrder;
  updatedAt?: SortOrder;
};
