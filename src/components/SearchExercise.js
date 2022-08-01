import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HomeHorizontalScrollbar from "./HomeHorizontalScrollbar";

import { FetchData, ExerciseOptions } from "../utlis/fetchData";

const SearchExercise = ({
  search,
  setSearch,
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        ExerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExerciseData();
  }, []);

  // console.log(bodyParts);
  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const submitHandler = async () => {
    // console.log(search);

    if (search) {
      const exercisesData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        ExerciseOptions
      );
      //   console.log(exercisesData);

      const searchExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      //   console.log(searchExercises);
      setSearch("");
      setExercises(searchExercises);
      window.scrollTo({
        top: 1700,
        left: 100,
        behavior: "smooth",
      });
    }
  };
  return (
    <Section id="search">
      <div className="container">
        <div className="heading">
          <h2 className="title">
            {" "}
            Awesome Exercises you <br /> should Know{" "}
          </h2>
        </div>
        <div className="input">
          <input
            type="text"
            className="inputField"
            placeholder="Search Exercise..."
            value={search}
            onChange={searchHandler}
          />
          <Button onClick={submitHandler}>Search</Button>
        </div>
        <div id="ExploreExercise" className="HomeHorizontalScrollbar">
          <HomeHorizontalScrollbar
            data={bodyParts}
            // bodyParts
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin-top: 7rem;
  height: 100vh;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    .heading {
      h2 {
        font-size: 3.5rem;
        text-align: center;

        text-transform: capitalize;
      }
    }

    .input {
      display: flex;
      position: "relative";

      width: 70vw;
      justify-content: center;
      align-content: center;
      input {
        position: relative;
        left: 3rem;
        width: 70%;
        background-color: #191f2a;
        color: #fff;
        font-size: 1.7rem;
        padding: 0.5rem 7rem 0.5rem 1rem;
        border-radius: 7px;
        ::placeholder {
          color: #fff;
          opacity: 0.5;
        }
      }
    }
    .HomeHorizontalScrollbar {
      margin-top: 4rem;
      width: 90vw;
    }
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    margin-top: 3.5rem;
    height: 100vh;
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      .heading {
        h2 {
          font-size: 2rem;
          text-align: center;

          text-transform: capitalize;
        }
      }

      .input {
        box-sizing: border-box;
        display: flex;
        position: "relative";
        flex-direction: column;
        gap: 1rem;

        width: 75vw;
        justify-content: center;

        input {
          left: 0px;
          width: 100%;
          font-size: 1.2rem;
          padding: 0.5rem 1rem;
        }
      }
      .HomeHorizontalScrollbar {
        margin-top: 2rem;
        width: 90vw;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 500px) {
    margin-top: 2rem;
    .container {
      .heading {
        h2 {
          font-size: 1.5rem;
        }
      }
      .input {
        box-sizing: border-box;
        display: flex;
        position: "relative";
        flex-direction: column;
        gap: 1rem;

        width: 75vw;
        justify-content: center;

        input {
          left: 0px;
          width: 100%;
          font-size: 1.2rem;
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;

const Button = styled.button`
  outline: none;

  padding: 0.5rem 1.2rem;
  background-color: #1460e5;
  border-radius: 7px;
  color: #fff;
  text-decoration: none;
  width: max-content;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.3rem;
  z-index: 10;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #1460e5;
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    padding: 0.5rem 1rem;
    align-self: center;
    border: none;
    &:hover {
      border: 1px solid #000;
    }
  }
`;
export default SearchExercise;
