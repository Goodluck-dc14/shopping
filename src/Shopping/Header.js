import React, { useContext, useState } from "react";
import styled from "styled-components";
import img from "./logo.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CommentIcon from "@material-ui/icons/Comment";
import PolymerIcon from "@material-ui/icons/Polymer";
import MotherPage from "./MotherPage";
import { GlobalContext } from "./GlobalContext";
import app from "./base";

const Header = () => {
  const [show, setShow] = useState(false);
  const { current } = useContext(GlobalContext);

  const Toggle = () => {
    setShow(!show);
  };

  return (
    <Container>
      <Logo src={img} />
      <Holder1>
        <CenterHolder>
          <PolymerIcon />
        </CenterHolder>
        <BlinkHold></BlinkHold>
      </Holder1>
      <Holder>
        <ShoppingCartIcon />
        <CommentIcon />
        <>
          {current ? (
            <Button
              onClick={Toggle}
              onClick={() => {
                app.auth().signOut();
              }}
            >
              Log Out
            </Button>
          ) : (
            <Button onClick={Toggle}>Log In</Button>
          )}
          <UserName>{current?.displayName}</UserName>
        </>
        <MotherPage show={show} r={Toggle} />
      </Holder>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid silver;
  color: white;
  height: 70px;
`;

const Logo = styled.img`
  height: 80%;
  object-fit: contain;
`;

const Holder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  margin-right: 30px;
  cursor: pointer;
`;

const Button = styled.div`
  height: 40px;
  width: 100px;
  color: black;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const CenterHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  margin-top: 70px;
  margin-left: 70px;
  background-color: white;
  color: black;
  cursor: pointer;
  position: absolute;
  &:hover {
    opacity: 0.7;
  }
`;

const UserName = styled.div``;

const BlinkHold = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 360px;

  animation: blink 3s;
  animation-iteration-count: infinite;

  @keyframes blink {
    100% {
      background-color: #7f7f81d2;
      opacity: 0;
    }
  }
`;

const Holder1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
