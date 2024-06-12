import { Chat as TChat } from "../api/chat/Chat";

export const CHAT_TITLE_FIELD = "name";

export const ChatTitle = (record: TChat): string => {
  return record.name?.toString() || String(record.id);
};
