const { NODE_ENV } = process.env;

export const IN_DEVELOPMENT = NODE_ENV === "development";
export const IN_PRODUCTION = NODE_ENV === "production";
export const IN_TEST = NODE_ENV === "TEST";
