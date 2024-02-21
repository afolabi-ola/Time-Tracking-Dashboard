"use strict";

const daily = document.querySelector(".Daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".Monthly");

const workTitle = document.querySelector(".work-text");
const playTitle = document.querySelector(".play-text");
const studyTitle = document.querySelector(".study-text");
const exerciseTitle = document.querySelector(".exercise-text");
const socialTitle = document.querySelector(".social-text");
const selfCareTitle = document.querySelector(".self-care-text");

const workHrs = document.querySelector(".work-time");
const playHrs = document.querySelector(".play-time");
const studyHrs = document.querySelector(".study-time");
const exerciseHrs = document.querySelector(".exercise-time");
const socialHrs = document.querySelector(".social-time");
const selfCareHrs = document.querySelector(".self-time");

const workPreviousHrs = document.querySelector(".work-previous-hours");
const playPreviousHrs = document.querySelector(".play-previous-hours");
const studyPreviousHrs = document.querySelector(".study-previous-hours");
const exercisePreviousHrs = document.querySelector(".exercise-previous-hours");
const socialPreviousHrs = document.querySelector(".social-previous-hours");
const selfCarePreviousHrs = document.querySelector(".self-previous-hours");

const alertError = (errorType) => {
  alert(errorType);
};

const getExerciseData = async () => {
  try {
    const res = await fetch("http://localhost:3000/3");
    if (!res.ok) {
      throw new Error(
        "Couldn't connect to server. Please refresh your browser"
      );
    }
    const data = await res.json();
    console.log(data);
    exerciseTitle.textContent = data.title;
    // exerciseHrs.textContent = data.timeframes.daily.current;
  } catch (error) {
    console.error("Error:", error);
    alertError(error);
  }
};
getExerciseData();
