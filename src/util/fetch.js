import axios from "axios";
import { AUTHENTICATION_HEADER_NAME } from "config/vars";

axios.defaults.headers.common.Accept = "application/json";
axios.interceptors.response.use(({ data }) => data);

const generateAuthenticatedRequestHeaders = (authenticatedUserId) => ({
  [AUTHENTICATION_HEADER_NAME]: authenticatedUserId,
});

export const getAuthenticatedRequest = async (url, authenticatedUserId) => {
  const headers = generateAuthenticatedRequestHeaders(authenticatedUserId);
  return axios.get(url, { headers });
};
