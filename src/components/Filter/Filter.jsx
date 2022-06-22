import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selector';
import { filterContact } from '../../redux/contacts/contacts-actions';
import { v4 as uuidv4 } from 'uuid';
const Filter = () => {
  const dispatch = useDispatch();
  const name = useSelector(getFilter);
  const filterId = uuidv4();
  return (
    <>
      <label>
        <input
          id={filterId}
          placeholder="Enter to search..."
          type="text"
          value={name}
          onChange={e => dispatch(filterContact(e.target.value))}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </>
  );
};

export default Filter;
