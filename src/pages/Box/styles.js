import styled from "styled-components";

export const BoxContainer = styled.div`
  max-width: 900px;
  margin: 50px auto 0;
`;
export const BoxHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoxTitle = styled.h1`
  font-size: 21px;
  padding-left: 15px;
  margin-left: 15px;
  border-left: 1px solid #ddd;
`;
export const FileList = styled.ul`
  margin: 30px 0;
  list-style: none;

  li + li {
    padding-top: 20px;
    margin-top: 20px;
    border-top: 1px solid #eee;
  }
`;
export const FileItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #999;
    font-size: 13px;
  }
`;
export const FileItemLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  strong {
    font-weight: normal;
    font-size: 14px;
    margin-left: 10px;
    color: #333;
  }
`;
export const Upload = styled.div`
  border-radius: 4px;
  padding: 30px;
  text-align: center;
  border: 1px dashed #ddd;
  color: #999;
  margin-top: 50px;
  cursor: pointer;
`;
/*
#box-container header button svg {
  margin-right: 10px;
}

#box-container header button:hover {
  opacity: 0.9;
}
*/
