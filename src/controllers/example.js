import getExampleMessage from "services/get-example-message";

export const get = async (request, response) => {
  const message = await getExampleMessage();
  const formattedResponse = { message };

  response.send(formattedResponse);
};
