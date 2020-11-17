import axios from "axios";
import { AUTHENTICATION_HEADER_NAME } from "config/vars";

axios.defaults.headers.common.Accept = "application/json";

const generateAuthenticatedRequestHeaders = (authenticatedUserId) => ({
  [AUTHENTICATION_HEADER_NAME]: authenticatedUserId,
});

export const getRequest = async (url, authenticatedUserId) => {
  const headers = generateAuthenticatedRequestHeaders(authenticatedUserId);
  return axios.get(url, { headers }).then(({ data }) => data);
};
