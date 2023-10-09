import styled from '@emotion/styled';

export const Item = styled.li`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
`;
export const DeleteBtn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  background-color: #000;
  color: white;
  &:hover,
  &:focus {
    color: white;
    background-color: rgb(12 44 88);
  }
`;
export const Name = styled.p`
  display: inline-block;
`;