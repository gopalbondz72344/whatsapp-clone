import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type MessageUpdateInput = {
  chat?: ChatWhereUniqueInput | null;
  content?: string | null;
  media?: InputJsonValue;
  sender?: string | null;
  timestamp?: Date | null;
};
