"use strict";
//The time
const daily = document.querySelector(".Daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".Monthly");

const actives = document.querySelectorAll(".active");

//the titles
const workTitle = document.querySelector(".work-text");
const playTitle = document.querySelector(".play-text");
const studyTitle = document.querySelector(".study-text");
const exerciseTitle = document.querySelector(".exercise-text");
const socialTitle = document.querySelector(".social-text");
const selfCareTitle = document.querySelector(".self-care-text");

//the current hrs
const workHrs = document.querySelector("#work-time");
const playHrs = document.querySelector("#play-time");
const studyHrs = document.querySelector("#study-time");
const exerciseHrs = document.querySelector("#exercise-time");
const socialHrs = document.querySelector("#social-time");
const selfCareHrs = document.querySelector("#self-time");

//the previous hrs
const workPreviousHrs = document.querySelector(".work-previous-hours");
const playPreviousHrs = document.querySelector(".play-previous-hours");
const studyPreviousHrs = document.querySelector(".study-previous-hours");
const exercisePreviousHrs = document.querySelector(".exercise-previous-hours");
const socialPreviousHrs = document.querySelector(".social-previous-hours");
const selfCarePreviousHrs = document.querySelector(".self-previous-hours");

//the json server url endpoints
const urlWork = "http://localhost:3000/0";
const urlPlay = "http://localhost:3000/1";
const urlStudy = "http://localhost:3000/2";
const urlExercise = "http://localhost:3000/3";
const urlSocial = "http://localhost:3000/4";
const urlSelfCare = "http://localhost:3000/5";

//the error alert function
const alertError = (errorType) => {
  alert(errorType);
};
//geting the data base function
const getDatabase = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

window.addEventListener("DOMContentLoaded", () => {
  getDailyData();
});

//Getting Daily Data
const getDailyData = async () => {
  const dataWork = await getDatabase(urlWork);
  const dataPlay = await getDatabase(urlPlay);
  const dataStudy = await getDatabase(urlStudy);
  const dataExercise = await getDatabase(urlExercise);
  const dataSocial = await getDatabase(urlSocial);
  const dataSelfCare = await getDatabase(urlSelfCare);

  workTitle.textContent = dataWork.title;
  workHrs.textContent = dataWork.timeframes.daily.current;
  workPreviousHrs.textContent = dataWork.timeframes.daily.previous;

  playTitle.textContent = dataPlay.title;
  playHrs.textContent = dataPlay.timeframes.daily.current;
  playPreviousHrs.textContent = dataPlay.timeframes.daily.previous;

  studyTitle.textContent = dataStudy.title;
  studyHrs.textContent = dataStudy.timeframes.daily.current;
  studyPreviousHrs.textContent = dataStudy.timeframes.daily.previous;

  exerciseTitle.textContent = dataExercise.title;
  exerciseHrs.textContent = dataExercise.timeframes.daily.current;
  exercisePreviousHrs.textContent = dataExercise.timeframes.daily.previous;

  socialTitle.textContent = dataSocial.title;
  socialHrs.textContent = dataSocial.timeframes.daily.current;
  socialPreviousHrs.textContent = dataSocial.timeframes.daily.previous;

  selfCareTitle.textContent = dataSelfCare.title;
  selfCareHrs.textContent = dataSelfCare.timeframes.daily.current;
  selfCarePreviousHrs.textContent = dataSelfCare.timeframes.daily.previous;
};

const getWeeklyData = async () => {
  const dataWork = await getDatabase(urlWork);
  const dataPlay = await getDatabase(urlPlay);
  const dataStudy = await getDatabase(urlStudy);
  const dataExercise = await getDatabase(urlExercise);
  const dataSocial = await getDatabase(urlSocial);
  const dataSelfCare = await getDatabase(urlSelfCare);

  workTitle.textContent = dataWork.title;
  workHrs.textContent = dataWork.timeframes.weekly.current;
  workPreviousHrs.textContent = dataWork.timeframes.weekly.previous;

  playTitle.textContent = dataPlay.title;
  playHrs.textContent = dataPlay.timeframes.weekly.current;
  playPreviousHrs.textContent = dataPlay.timeframes.weekly.previous;

  studyTitle.textContent = dataStudy.title;
  studyHrs.textContent = dataStudy.timeframes.weekly.current;
  studyPreviousHrs.textContent = dataStudy.timeframes.weekly.previous;

  exerciseTitle.textContent = dataExercise.title;
  exerciseHrs.textContent = dataExercise.timeframes.weekly.current;
  exercisePreviousHrs.textContent = dataExercise.timeframes.weekly.previous;

  socialTitle.textContent = dataSocial.title;
  socialHrs.textContent = dataSocial.timeframes.weekly.current;
  socialPreviousHrs.textContent = dataSocial.timeframes.weekly.previous;

  selfCareTitle.textContent = dataSelfCare.title;
  selfCareHrs.textContent = dataSelfCare.timeframes.weekly.current;
  selfCarePreviousHrs.textContent = dataSelfCare.timeframes.weekly.previous;
};

//Getting monthly logic/data
const getMonthlyData = async () => {
  const dataWork = await getDatabase(urlWork);
  const dataPlay = await getDatabase(urlPlay);
  const dataStudy = await getDatabase(urlStudy);
  const dataExercise = await getDatabase(urlExercise);
  const dataSocial = await getDatabase(urlSocial);
  const dataSelfCare = await getDatabase(urlSelfCare);

  workTitle.textContent = dataWork.title;
  workHrs.textContent = dataWork.timeframes.monthly.current;
  workPreviousHrs.textContent = dataWork.timeframes.monthly.previous;

  playTitle.textContent = dataPlay.title;
  playHrs.textContent = dataPlay.timeframes.monthly.current;
  playPreviousHrs.textContent = dataPlay.timeframes.monthly.previous;

  studyTitle.textContent = dataStudy.title;
  studyHrs.textContent = dataStudy.timeframes.monthly.current;
  studyPreviousHrs.textContent = dataStudy.timeframes.monthly.previous;

  exerciseTitle.textContent = dataExercise.title;
  exerciseHrs.textContent = dataExercise.timeframes.monthly.current;
  exercisePreviousHrs.textContent =
    dataExercise.timeframes.monthly.previexercise;

  socialTitle.textContent = dataSocial.title;
  socialHrs.textContent = dataSocial.timeframes.monthly.current;
  socialPreviousHrs.textContent = dataSocial.timeframes.monthly.previous;

  selfCareTitle.textContent = dataSelfCare.title;
  selfCareHrs.textContent = dataSelfCare.timeframes.monthly.current;
  selfCarePreviousHrs.textContent = dataSelfCare.timeframes.monthly.previous;
};

daily.addEventListener("click", () => {
  getDailyData();
});

weekly.addEventListener("click", () => {
  getWeeklyData();
});

monthly.addEventListener("click", () => {
  getMonthlyData();
});

for (let i = 0; i < actives.length; i++) {
  actives[i].addEventListener("click", () => {
    for (let r = 0; r < actives.length; r++) {
      actives[r].classList.remove("show");
    }
    actives[i].classList.add("show");
  });
}
actives[0].classList.add("show");
