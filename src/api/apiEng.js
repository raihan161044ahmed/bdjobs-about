const API_URL = "../database/db_eng.json";

export const fetchDummyDataEng = () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

  