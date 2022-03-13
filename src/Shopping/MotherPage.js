import React from "react";
import styled from "styled-components";
import { GiCancel } from "react-icons/gi";
import img from "./logo.png";
import app from "./base";
import firebase from "firebase";

const MotherPage = ({ show, r }) => {
  const signUpWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await app.auth().signInWithPopup(provider);
  };
  return (
    <>
      {show ? (
        <Container>
          <Modal>
            <GiCancel
              onClick={r}
              style={{ fontSize: "30px", margin: "10px" }}
            />
            <CardHolder>
              <Logo src={img} />
              <Top>
                Unlock useful features by signing in. A bunch of cool stuff like
                content filters and bookmarks are waiting just for you.
              </Top>
              <Button onClick={signUpWithGoogle}>Sign Up with Google</Button>
              <Footer>
                By signing up I accept the Terms of Service and the Privacy
                Policy.
              </Footer>
            </CardHolder>
          </Modal>
        </Container>
      ) : null}
    </>
  );
};

export default MotherPage;

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(250, 250, 250, 0.1);
  backdrop-filter: blur(1px);
`;

const Modal = styled.div`
  background-color: #191a1c;
  height: 300px;
  width: 400px;
  border-radius: 5px;
`;

const Logo = styled.img`
  height: 80px;
  object-fit: contain;
`;

const Top = styled.div`
  text-align: center;
  width: 380px;
  font-size: 15px;
`;

const CardHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.div`
  height: 40px;
  width: 200px;
  background-color: white;
  border-radius: 5px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Footer = styled.div`
  text-align: center;
  width: 250px;
  font-size: 10px;
  margin-top: 10px;
`;
