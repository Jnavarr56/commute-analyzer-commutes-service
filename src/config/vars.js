const {
  NODE_ENV,
  AUTHENTICATION_HEADER_NAME: AUTHENTICATION_HEADER_NAME_ENV,
} = process.env;

export const IN_DEVELOPMENT = NODE_ENV === "development";
export const IN_PRODUCTION = NODE_ENV === "production";
export const IN_TEST = NODE_ENV === "TEST";

export const PLACES_API_URL = "http://places-service";
export const PLACES_API_APTS_ENDPOINT = "/apartments";
export const PLACES_API_FAVS_ENDPOINT = "/favorites";

export const AUTHENTICATION_HEADER_NAME = AUTHENTICATION_HEADER_NAME_ENV;
