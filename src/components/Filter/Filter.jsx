import { FilterField, FilterLabel } from './Filter.styled';

export const Filter = ({ handleFilterChange, filter }) => {
  return (
    <>
      <FilterLabel >Find contacts by name</FilterLabel>
      <FilterField
        id="filter"
        onChange={handleFilterChange}
        value={filter} />
    </>
  );
};