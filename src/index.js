import { PATH_DB } from './constants/contacts.js';
import { readContacts } from './utils/readContacts.js';
import { writeContacts } from './utils/writeContacts.js';
console.log(PATH_DB);

(async () => {
  const contacts = await readContacts();
  console.log(contacts);
  contacts.push('Hello');
  console.log(contacts);
  await writeContacts(contacts);
})();
