import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  profilePicture?: InputJsonValue;
  roles: InputJsonValue;
  status?: string | null;
  username: string;
};
