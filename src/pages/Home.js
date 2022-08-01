import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercise";
import Exercises from "../components/Exercises";
import styled from "styled-components";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <Div>
      <HeroBanner />
      <SearchExercise
        search={search}
        setSearch={setSearch}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        search={search}
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Home;
