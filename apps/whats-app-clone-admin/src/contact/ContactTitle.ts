import { Contact as TContact } from "../api/contact/Contact";

export const CONTACT_TITLE_FIELD = "contactUser";

export const ContactTitle = (record: TContact): string => {
  return record.contactUser?.toString() || String(record.id);
};
