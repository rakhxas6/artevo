import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_STRIPE_APP_DEV_URL + url,
      {
        headers: {
          Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
        },
        timeout: 10000,
        params
      }
    );
    return data;
  } catch (err) {
    console.error("API error:", err);
    return err;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
});
