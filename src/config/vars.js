const { NODE_ENV } = process.env;

export const IN_DEVELOPMENT = NODE_ENV === "development";
export const IN_PRODUCTION = NODE_ENV === "production";
export const IN_TEST = NODE_ENV === "TEST";

export const AUTHENTICATION_HEADER_NAME = "x-authenticated-user-id";

export const PLACES_API_URL = "http://localhost:4000";
export const PLACES_API_APTS_ENDPOINT = "/apartments";
export const PLACES_API_FAVS_ENDPOINT = "/favorites";
