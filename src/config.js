// @ts-check
const config = Object.freeze({
  storename: process.env.REACT_APP_STORENAME
    ? process.env.REACT_APP_STORENAME
    : "development",
});

export default config;
