"use strict";
//The time
const daily = document.querySelector(".Daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".Monthly");

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

const getWorkDailyData = async (url) => {
  const data = await getDatabase(urlWork);
  workTitle.textContent = data.title;
  workHrs.textContent = data.timeframes.daily.current;
  workPreviousHrs.textContent = data.timeframes.daily.previous;
};

const getplayDailyData = async (url) => {
  const data = await getDatabase(urlPlay);
  playTitle.textContent = data.title;
  playHrs.textContent = data.timeframes.daily.current;
  playPreviousHrs.textContent = data.timeframes.daily.previous;
};

const getStudyDailyData = async (url) => {
  const data = await getDatabase(urlStudy);
  studyTitle.textContent = data.title;
  studyHrs.textContent = data.timeframes.daily.current;
  studyPreviousHrs.textContent = data.timeframes.daily.previous;
};

const getExerciseDailyData = async (url) => {
  const data = await getDatabase(urlExercise);
  exerciseTitle.textContent = data.title;
  exerciseHrs.textContent = data.timeframes.daily.current;
  exercisePreviousHrs.textContent = data.timeframes.daily.previous;
};

const getSocialDailyData = async (url) => {
  const data = await getDatabase(urlSocial);
  socialTitle.textContent = data.title;
  socialHrs.textContent = data.timeframes.daily.current;
  socialPreviousHrs.textContent = data.timeframes.daily.previous;
};

const getSelfCareDailyData = async (url) => {
  const data = await getDatabase(urlSelfCare);
  selfCareTitle.textContent = data.title;
  selfCareHrs.textContent = data.timeframes.daily.current;
  selfCarePreviousHrs.textContent = data.timeframes.daily.previous;
};

//  Weekly  logic
const getWorkWeeklyData = async () => {
  const data = await getDatabase(urlWork);
  workTitle.textContent = data.title;
  workHrs.textContent = data.timeframes.weekly.current;
  workPreviousHrs.textContent = data.timeframes.weekly.previous;
};

const getPlayWeeklyData = async () => {
  const data = await getDatabase(urlPlay);
  playTitle.textContent = data.title;
  playHrs.textContent = data.timeframes.weekly.current;
  playPreviousHrs.textContent = data.timeframes.weekly.previous;
};

const getStudyWeeklyData = async () => {
  const data = await getDatabase(urlStudy);
  studyTitle.textContent = data.title;
  studyHrs.textContent = data.timeframes.weekly.current;
  studyPreviousHrs.textContent = data.timeframes.weekly.previous;
};

const getExerciseWeeklyData = async () => {
  const data = await getDatabase(urlExercise);
  exerciseTitle.textContent = data.title;
  exerciseHrs.textContent = data.timeframes.weekly.current;
  exercisePreviousHrs.textContent = data.timeframes.weekly.previous;
};

const getSocialWeeklyData = async () => {
  const data = await getDatabase(urlSocial);
  socialTitle.textContent = data.title;
  socialHrs.textContent = data.timeframes.weekly.current;
  socialPreviousHrs.textContent = data.timeframes.weekly.previous;
};

const getSelfCareWeekyData = async () => {
  const data = await getDatabase(urlSelfCare);
  selfCareTitle.textContent = data.title;
  selfCareHrs.textContent = data.timeframes.weekly.current;
  selfCarePreviousHrs.textContent = data.timeframes.weekly.previous;
};

daily.addEventListener("click", () => {
  getWorkDailyData(urlWork);
  getplayDailyData(urlPlay);
  getStudyDailyData();
  getExerciseDailyData();
  getSocialDailyData();
  getSelfCareDailyData();
});

weekly.addEventListener("click", () => {
  getWorkWeeklyData();
  getPlayWeeklyData();
  getStudyWeeklyData();
  getExerciseWeeklyData();
  getSocialWeeklyData();
  getSelfCareWeekyData();
});
