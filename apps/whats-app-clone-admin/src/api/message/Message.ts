import { Chat } from "../chat/Chat";
import { JsonValue } from "type-fest";

export type Message = {
  chat?: Chat | null;
  content: string | null;
  createdAt: Date;
  id: string;
  media: JsonValue;
  sender: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
