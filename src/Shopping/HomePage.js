import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MessageIcon from "@material-ui/icons/Message";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import img from "./img.jpg";
import image from "./menCloth.jpeg";
import image1 from "./women.jpeg";
import image2 from "./children.jpeg";
import app from "./base";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [data, setData] = useState([]);

  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [childrenData, setChildrenData] = useState([]);

  const [clickMen, setClickMen] = useState(false);
  const [clickWomen, setClickWomen] = useState(false);
  const [clickChildren, setClickChildren] = useState(false);
  const [clickPopular, setClickPopular] = useState(false);

  const handlePopularData = () => {
    setClickPopular(true);
    setClickMen(false);
    setClickWomen(false);
    setClickChildren(false);
  };

  const handleMenData = () => {
    setClickMen(true);
    setClickWomen(false);
    setClickChildren(false);
  };

  const handleWomenData = () => {
    setClickWomen(true);
    setClickMen(false);
    setClickChildren(false);
  };

  const handleChildrenData = () => {
    setClickChildren(true);
    setClickMen(false);
    setClickWomen(false);
  };

  const fetchAllData = async () => {
    await app
      .firestore()
      .collection("Store")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setData(item);
        console.log(data);
      });
  };

  const fetchMenData = async () => {
    await app
      .firestore()
      .collection("Store")
      .orderBy("data")
      .startAt("Native Dishes")
      .endAt("Native Dishes")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setMenData(item);
        console.log(menData);
      });
  };

  const fetchWomenData = async () => {
    await app
      .firestore()
      .collection("Store")
      .orderBy("data")
      .startAt("Fast Food")
      .endAt("Fast Food")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setWomenData(item);
        console.log(womenData);
      });
  };

  const fetchChildrenData = async () => {
    await app
      .firestore()
      .collection("Store")
      .orderBy("data")
      .startAt("Vegetarians Food")
      .endAt("Vegetarians Food")
      .onSnapshot((snapshot) => {
        const item = [];
        snapshot.forEach((doc) => {
          item.push({ ...doc.data(), id: doc.id });
        });
        setChildrenData(item);
        console.log(childrenData);
      });
  };

  useEffect(() => {
    fetchAllData();
    fetchMenData();
    fetchWomenData();
    fetchChildrenData();
  }, []);

  return (
    <Container>
      <Description>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a meaning
        of the text influencing the design.
      </Description>
      <BodyHead>
        <MainHolder>
          <SearchIcon />
          <Popular onClick={handlePopularData}>
            African And Continential dishes
          </Popular>
          <Men onClick={handleMenData}>Native Dishes</Men>
          <Women onClick={handleWomenData}>Fast Food</Women>
          <Children onClick={handleChildrenData}>vegetarians Food</Children>
        </MainHolder>
        <AddHolder to="/post">
          Discover Foods
          <AddIcon />
        </AddHolder>
      </BodyHead>
      <BoxHolder>
        {clickMen ? (
          <>
            {menData.map(({ id, title, logo, avatar }) => (
              <Card key={id}>
                <Logo src={logo} />
                <Title>{title}</Title>
                <Time>10 minutes ago</Time>
                <Avatar src={avatar} />
                <Icons>
                  <ShoppingCartIcon />
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/comment/${id}`}
                  >
                    {" "}
                    <MessageIcon />
                  </Link>
                  <FavoriteBorderIcon />
                </Icons>
              </Card>
            ))}
          </>
        ) : (
          <>
            {clickWomen ? (
              <>
                {womenData.map(({ id, title, logo, avatar }) => (
                  <Card key={id}>
                    <Logo src={logo} />
                    <Title>{title}</Title>
                    <Time>10 minutes ago</Time>
                    <Avatar src={avatar} />
                    <Icons>
                      <ShoppingCartIcon />
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to={`/comment/${id}`}
                      >
                        {" "}
                        <MessageIcon />
                      </Link>
                      <FavoriteBorderIcon />
                    </Icons>
                  </Card>
                ))}
              </>
            ) : (
              <>
                {clickChildren ? (
                  <>
                    {childrenData.map(({ id, title, logo, avatar }) => (
                      <Card key={id}>
                        <Logo src={logo} />
                        <Title>{title}</Title>
                        <Time>10 minutes ago</Time>
                        <Avatar src={avatar} />
                        <Icons>
                          <ShoppingCartIcon />
                          <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to={`/comment/${id}`}
                          >
                            {" "}
                            <MessageIcon />
                          </Link>
                          <FavoriteBorderIcon />
                        </Icons>
                      </Card>
                    ))}
                  </>
                ) : (
                  <>
                    {clickPopular ? (
                      <>
                        {data.map(({ id, title, logo, avatar }) => (
                          <Card key={id}>
                            <Logo src={logo} />
                            <Title>{title}</Title>
                            <Time>10 minutes ago</Time>
                            <Avatar src={avatar} />
                            <Icons>
                              <ShoppingCartIcon />
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                                to={`/comment/${id}`}
                              >
                                {" "}
                                <MessageIcon />
                              </Link>
                              <FavoriteBorderIcon />
                            </Icons>
                          </Card>
                        ))}
                      </>
                    ) : (
                      <>
                        {data.map(({ id, title, logo, avatar }) => (
                          <Card key={id}>
                            <Logo src={logo} />
                            <Title>{title}</Title>
                            <Time>10 minutes ago</Time>
                            <Avatar src={avatar} />
                            <Icons>
                              <ShoppingCartIcon />
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                                to={`/comment/${id}`}
                              >
                                {" "}
                                <MessageIcon />
                              </Link>
                              <FavoriteBorderIcon />
                            </Icons>
                          </Card>
                        ))}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </BoxHolder>
    </Container>
  );
};

export default HomePage;

const Container = Styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`;

const Description = Styled.div`
width: 400px;
border: 1px solid gray;
display: flex;
justify-content: center;
text-align: center;
color: white;
font-size: 14px;
padding: 10px;
border-radius: 20px;
margin-top: 50px;

`;

const BodyHead = Styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
margin-top: 5%;

`;

const MainHolder = Styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 800px;
padding-left: 10px;
color: white;
font-size: 20px;
font-weight: bold;
cursor: pointer;

`;

const AddHolder = Styled.div`
display: flex;
align-items: center;
padding-right: 20px;
color: white;
font-size: 20px;
font-weight: bold;
cursor: pointer;
opacity: 1;
&:hover{
  opacity: 0.6;
}
`;

const Popular = Styled.div`
color: white;
font-size: 20px;
font-weight: bold;
cursor: pointer;
opacity: 1;
&:hover{
opacity: 0.3;
}
`;

const Men = Styled.div`
color: white;
font-size: 20px;
font-weight: bold;
cursor: pointer;
opacity: 1;
&:hover{
  opacity: 0.3;
}
`;

const Women = Styled.div`
color: white;
font-size: 20px;
font-weight: bold;
cursor: pointer;
opacity: 1;
&:hover{
  opacity: 0.3;
}
`;

const Children = Styled.div`
color: white;
font-size: 20px;
font-weight: bold;
cursor: pointer;
opacity: 1;
&:hover{
  opacity: 0.3;
}
`;

const Title = Styled.div`
color: white;
font-weight: bold;
margin: 10px;
width: 94%;
display: flex;
`;

const Time = Styled.div`
font-family: italic;
color: gray;
margin: 10px;
margin-top: 20px;

`;

const Logo = Styled.img`
height: 40px;
width: 40px;
border-radius: 40px;
object-fit: cover;
margin: 10px;
`;

const Icons = Styled.div`
display: flex;
justify-content: space-between;
width: 95%;
margin: 5px;
padding-bottom: 5px;
color: white;
cursor: pointer;
`;

const Avatar = Styled.img`
height: 120px;
width: 96%;
object-fit: cover;
border-radius: 10px;
margin: 5px;
`;

const BoxHolder = Styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-top: 40px;
`;

const Card = Styled.div`
width: 280px;
border: 1px solid silver;
border-radius: 10px;
margin: 10px;
background-color: #292a2c;
`;
