export const getMissingParamsMessage = (paramNames) => {
  return paramNames.reduce((message, param) => {
    message[param] = ["must not be blank"];
    return message;
  }, {});
};
