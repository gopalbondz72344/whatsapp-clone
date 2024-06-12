import { MessageUpdateManyWithoutChatsInput } from "./MessageUpdateManyWithoutChatsInput";

export type ChatUpdateInput = {
  chatParticipants?: string | null;
  messages?: MessageUpdateManyWithoutChatsInput;
  name?: string | null;
  participants?: string | null;
};
