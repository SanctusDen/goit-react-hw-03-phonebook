import { DeleteBtn, Item, Name } from './Contact.styled';

export const Contact = ({ name, number, id, handleDelete }) => {
  return (
    <Item key={id}>
      <Name>
        {name}: {number}
      </Name>
      <DeleteBtn type="button" onClick={handleDelete} id={id}>
        Delete
      </DeleteBtn>
    </Item>
  );
};
