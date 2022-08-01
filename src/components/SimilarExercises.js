import React from "react";
import styled from "styled-components";

import SimilarHorizontal from "./SimilarHorizontal";
// import Loader from "./Loader";
const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <SimilarExercisesComp>
      <h2 className="title">Exercises that target the same muscles group</h2>
      <div className="SimilarMuscleExercises">
        <SimilarHorizontal targetMuscleExercises={targetMuscleExercises} />
      </div>

      <h2 className="title"> Exercises that uses the same equipments</h2>
      <div className="SimilarMuscleExercises">
        <SimilarHorizontal targetMuscleExercises={equipmentExercises} />
      </div>
    </SimilarExercisesComp>
  );
};

const SimilarExercisesComp = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-transform: capitalize;
  }
  .SimilarMuscleExercises {
    width: 90vw;
    margin-bottom: 4rem;
  }
  @media screen and (min-width: 520px) and (max-width: 768px) {
    margin-top: 3rem;
    .title {
      font-size: 1.5rem;
      margin: 0 2rem;
    }
    .SimilarMuscleExercises {
      width: 95vw;
      margin-bottom: 4rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 500px) {
    margin-top: 3rem;
    .title {
      font-size: 1.3rem;
      margin: 0 2rem;
    }
    .SimilarMuscleExercises {
      align-self: center;
      width: 100vw;
      margin-bottom: 4rem;
    }
  }
`;

export default SimilarExercises;
