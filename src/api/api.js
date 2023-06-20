const API_URL = "../database/db.json";

export const fetchDummyData = () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

  