import React from "react";
import styled from "styled-components";

const Comments = () => {
  return (
    <Container>
      <DescHolder>
        <ImageHolder />
        <Holder>
          <Title>Persuade using features and benefits</Title>
          <Description>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </Description>
        </Holder>
      </DescHolder>
    </Container>
  );
};

export default Comments;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  height: 100vh;
  /* flex-direction: column; */
`;

const DescHolder = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ImageHolder = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 5px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-left: 50px;
`;

const Description = styled.div`
  width: 400px;
  margin-top: 20px;
  margin-left: 50px;
`;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;
