import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';
import { getvisibleContacts } from 'redux/contacts/contacts-selector';
import ContactItem from '../Contactitem/ContactItem';
import s from '../ContacList/ContactList.module.css';
const ContactList = () => {
  const contacts = useSelector(getvisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={() => dispatch(deleteContact(id))}
          />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
