import axios from "axios";
import { getMissingParamsMessage } from "util/params";
import generateCommutesSummary from "services/generate-commutes-summary";

export const get = async (request, response) => {
  const { apartment_id } = request.query;
  const { authenticatedUserId } = request;

  if (!apartment_id) {
    const errorMessage = getMissingParamsMessage(["apartment_id"]);
    return response.status(400).send(errorMessage);
  }

  const summary = await generateCommutesSummary(
    authenticatedUserId,
    apartment_id
  );

  response.send(summary);
};
