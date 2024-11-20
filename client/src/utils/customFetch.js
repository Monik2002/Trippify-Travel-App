// import axios from "axios";

// export const customFetch = axios.create({
//   baseURL: 'http://localhost:4000/api/v1',
// });

// export default customFetch;

import axios from "axios";

export const customFetch = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  withCredentials: true,
});

export default customFetch;
