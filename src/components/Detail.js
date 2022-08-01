import React from "react";
import styled from "styled-components";
import BodyPartImage from "../assets/images/bodyPart.png";
import TargetImage from "../assets/images/target.png";
import EquipmentImg from "../assets/images/equipment.png";
const ExerciseDetail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;
  const ExtraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    },
  ];
  return (
    <DetailCard>
      <div className="image">
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      </div>
      <div className="content">
        <h3 className="heading">{name}</h3>

        <p className="discription">
          Exercises keep you strong.{" "}
          <strong style={{ color: "#1460e5" }}>{name}</strong> is the one of the
          best exercises to target your{" "}
          <strong style={{ color: "#1460e5" }}>{target}</strong>. It will help
          you to improve your mood and gain energy.
        </p>
        {ExtraDetails.map((item) => (
          <div key={item} className="muscleDetail">
            <div className="muscleimage">
              <img src={item.icon} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </DetailCard>
  );
};

const DetailCard = styled.div`
  margin: 3rem auto;
  display: flex;
  justify-content: space-between;
  width: 90vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 9px;
  padding: 2rem 3rem;
  gap: 7rem;
  .image {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    .heading {
      margin-top: 2rem;
      font-size: 2.5rem;
      font-weight: bold;
      text-transform: capitalize;
    }
    .discription {
      margin-top: 1rem;
      font-size: 1.3rem;
      font-weight: 500;
      color: #191f2a;
    }
    .muscleDetail {
      margin-top: 2rem;
      display: flex;
      gap: 2rem;
      align-items: center;
      div {
        width: 70px;
        height: 70px;
        background-color: #fafafa;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 1rem;
        &:hover {
          box-shadow: rgba(20, 96, 229, 1) 0px 20px 30px -10px;
        }
        img {
          width: 100%;
        }
      }
      p {
        font-size: 1.5rem;
        text-transform: capitalize;
        color: #191f2a;
      }
    }
  }

  @media screen and (min-width: 520px) and (max-width: 768px) {
    margin: 3rem auto;

    flex-direction: column;

    padding: 2rem;
    gap: 2rem;

    .image {
      margin: auto auto;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      padding: 0 1rem;

      .heading {
        margin: 0;
      }

      .muscleDetail {
        div {
          width: 60px;
          height: 60px;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 500px) {
    margin: 3rem auto;
    flex-direction: column;

    padding: 0.5rem;
    gap: 2rem;

    .image {
      margin: auto auto;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      padding: 0 0.7rem;
      margin-bottom: 1.5rem;

      .heading {
        margin: 0;
        font-size: 1.6rem;
      }
      .discription {
        font-size: 1.2rem;
      }
      .muscleDetail {
        div {
          width: 50px;
          height: 50px;
        }
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
export default ExerciseDetail;
