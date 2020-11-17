import { getRequest } from "util/fetch";

import {
  PLACES_API_URL,
  PLACES_API_APTS_ENDPOINT,
  PLACES_API_FAVS_ENDPOINT,
} from "config/vars";

export class ApartmentNotFoundError extends Error {}

export const fetchApartment = async (userId, apartmentId) => {
  const requestURL = `${PLACES_API_URL}${PLACES_API_APTS_ENDPOINT}/${apartmentId}`;
  return getRequest(requestURL, userId).catch((error) => {
    const notFound = error.response && error.response.status === 404;
    throw notFound ? new ApartmentNotFoundError() : error;
  });
};

export const fetchFavorite = async (userId) => {
  const requestURL = `${PLACES_API_URL}${PLACES_API_FAVS_ENDPOINT}`;
  return getRequest(requestURL, userId);
};
