import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "./img.jpg";
import { useParams } from "react-router-dom";
import app from "./base";
import { Input, Button } from "antd";

const db = app.firestore().collection("Store");
const Comment = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const PostComment = async () => {
    const user = app.auth().currentUser;
    if (user) {
      await db.doc(id).collection("comment").doc().set({
        message,
        userId: user.uid,
        userName: user.displayName,
        userImage: user.photoURL,
      });
      setMessage("");
    }
  };

  const MapComments = async () => {
    await db
      .doc(id)
      .collection("comment")
      .onSnapshot((snap) => {
        const item = [];
        snap.forEach((doc) => {
          item.push(doc.data());
        });
        setData(item);
        console.log(data);
      });
  };

  useEffect(() => {
    MapComments();
    console.log("this is the comments", data);
  }, []);

  return (
    <Container>
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        style={{
          height: "50px",
          width: "400px",
          borderRadius: "5px",
        }}
        placeholder="comment"
      />
      <button
        onClick={PostComment}
        style={{
          marginTop: "20px",
          width: "200px",
          height: "50px",
          backgroundColor: "gray",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
      {data.map(({ id, message, userName, userImage }) => (
        <>
          <Wrapper>
            <UserIm src={userImage} />
            <Holder>
              <ComName>{userName}</ComName>
              <ComUser> {message}</ComUser>
            </Holder>
          </Wrapper>
        </>
      ))}
    </Container>
  );
};

export default Comment;

const UserIm = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  object-fit: cover;
`;

const ComName = styled.div``;

const Holder = styled.div`
  margin: 30px;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ComUser = styled.div``;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 80px;
  height: 100vh;
  flex-direction: column;
`;
