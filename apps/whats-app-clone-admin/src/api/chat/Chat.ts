import { Message } from "../message/Message";

export type Chat = {
  chatParticipants: string | null;
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  participants: string | null;
  updatedAt: Date;
};
