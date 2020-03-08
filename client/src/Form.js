import styled from 'styled-components';

export const Input = styled.input`
  position: relative;
  width: 50%;
  height: 40px;
  left: 25%;
  top: 30%;

  border: 1px solid #ccd1d9;

  border-radius: 50px;

  ::placeholder {
    text-align: center;
    font-size: 1.5em;
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 25%;
  height: 12%;
  bottom: 14%;
  left: 38%;
  font-size: 100%;
  color: white;

  font-family: 'Raleway', sans-serif;
  background: #e00034;
  border: 1px solid #e00034;
  box-sizing: border-box;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const Form = styled.form`
  position: absolute;
  width: 40%;
  height: 45%;
  left: 30%;
  top: 24%;

  background: #ffffff;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 4px 4px;
`;
