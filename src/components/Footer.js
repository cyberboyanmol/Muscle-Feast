import React from "react";
import styled from "styled-components";
import logo from "../assets/icons/logo.png";
const Footer = () => {
  return (
    <Div>
      <div className="footer">
        <img src={logo} alt="logo" />
        <h2>Muscle Feast</h2>
      </div>
      <div className="creator">
        {" "}
        Created by <a href="https://github.com/Robin-Anmol">Robin-Anmol</a>
      </div>
    </Div>
  );
};
const Div = styled.div`
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  background: #191f2a;
  display: flex;
  padding: 1.5rem;

  gap: 1rem;
  justify-content: space-around;
  align-items: center;
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    img {
      width: 40px;
      height: 40px;
    }
    h2 {
      color: #fff;
      font-size: 1.2rem;
    }
  }
  .creator {
    color: #fff;
    font-size: 1.2rem;
    a {
      text-decoration: none;
      color: #1460e5;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    padding: 1.2rem;
    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      img {
        width: 40px;
        height: 40px;
      }
      h2 {
        color: #fff;
        font-size: 1.2rem;
      }
    }
    .creator {
      color: #fff;
      font-size: 1rem;
      a {
        text-decoration: none;
        color: #1460e5;
      }
    }
  }
`;
export default Footer;
