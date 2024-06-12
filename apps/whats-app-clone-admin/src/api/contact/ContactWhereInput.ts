import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactWhereInput = {
  contactUser?: StringNullableFilter;
  id?: StringFilter;
  owner?: StringNullableFilter;
};
