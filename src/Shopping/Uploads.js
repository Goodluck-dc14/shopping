import React, { useContext, useState } from "react";
import styled from "styled-components";
import app from "./base";
import { GlobalContext } from "./GlobalContext";

const Uploads = () => {
  const { current } = useContext(GlobalContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [logoImg, setLogoImg] = useState("");
  const [uploadImg, setUploadImg] = useState("");
  const [data, setData] = useState("");

  const imageUpload = async (e) => {
    const File = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(File.name);

    await fileRef.put(File);

    setUploadImg(await fileRef.getDownloadURL());
  };

  const LogoUpload = async (e) => {
    const File = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(File.name);

    await fileRef.put(File);

    console.log(File);

    setLogoImg(await fileRef.getDownloadURL());
  };

  const UploadProducts = async () => {
    const newUpload = app.auth().currentUser;

    if (newUpload) {
      await app
        .firestore()
        .collection("Store")
        .doc()
        .set({
          title,
          description,
          data,
          userId: newUpload.uid,
          logo: await logoImg,
          avatar: await uploadImg,
        });
    }
    setData("");
    setTitle("");
    setDescription("");
    setLogoImg("");
    setUploadImg("");
  };

  return (
    <Container>
      <CardHolder>
        <LogoDiv>Logo</LogoDiv>
        <input
          onChange={LogoUpload}
          type="file"
          placeholder="logo"
          style={{ height: "30px", width: "80%", margin: "10px" }}
        />
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title"
          style={{ height: "30px", width: "80%", margin: "10px" }}
        />
        <LogoDiv>Upload Products</LogoDiv>
        <input
          onChange={imageUpload}
          type="file"
          style={{ height: "30px", width: "80%", margin: "10px" }}
        />
        <select
          onChange={(e) => {
            setData(e.target.value);
          }}
          style={{ height: "30px", width: "90%" }}
        >
          <option value="Native Dishes">Native Dishes</option>
          <option value="Fast Foods">Fast Foods</option>
          <option value="Vegetarian Foods">Vegetarian Foods</option>
        </select>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description"
          style={{ height: "50px", width: "90%", margin: "10px" }}
        />
        <button onClick={UploadProducts} style={{ height: "40px" }}>
          Upload
        </button>
      </CardHolder>
    </Container>
  );
};

export default Uploads;

const LogoDiv = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const CardHolder = styled.div`
  height: 400px;
  width: 320px;
  background-color: white;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  padding: 10px;
`;
