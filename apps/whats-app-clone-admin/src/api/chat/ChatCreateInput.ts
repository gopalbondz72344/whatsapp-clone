import { MessageCreateNestedManyWithoutChatsInput } from "./MessageCreateNestedManyWithoutChatsInput";

export type ChatCreateInput = {
  chatParticipants?: string | null;
  messages?: MessageCreateNestedManyWithoutChatsInput;
  name?: string | null;
  participants?: string | null;
};
