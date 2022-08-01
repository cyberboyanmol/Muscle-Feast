import React from "react";
import styled from "styled-components";
const Button = ({ text, target, className }) => {
  return (
    <Btn href={`#${target}`} className={className || ""}>
      {text}
    </Btn>
  );
};

const Btn = styled.a`
  padding: 0.5rem 1.2rem;
  background-color: #1460e5;
  border-radius: 7px;
  color: #fff;
  text-decoration: none;
  width: max-content;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.3rem;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #1460e5;
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }
  @media screen and (min-width: 280px) and (max-width: 500px) {
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
`;
export default Button;
