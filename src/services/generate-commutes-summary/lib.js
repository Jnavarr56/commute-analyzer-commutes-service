import axios from "axios";
import { getAuthenticatedRequest } from "util/fetch";

import {
  PLACES_API_URL,
  PLACES_API_APTS_ENDPOINT,
  PLACES_API_FAVS_ENDPOINT,
} from "config/vars";

import {
  DISTANCE_MATRIX_API_URL,
  GOOGLE_API_KEY,
} from "config/google-api-settings";

export class ApartmentNotFoundError extends Error {}

export const fetchApartment = async (userId, apartmentId) => {
  const requestURL = `${PLACES_API_URL}${PLACES_API_APTS_ENDPOINT}/${apartmentId}`;
  return getAuthenticatedRequest(requestURL, userId).catch((error) => {
    const notFound = error.response && error.response.status === 404;
    throw notFound ? new ApartmentNotFoundError() : error;
  });
};

export const fetchFavorites = async (userId) => {
  const requestURL = `${PLACES_API_URL}${PLACES_API_FAVS_ENDPOINT}`;
  return getAuthenticatedRequest(requestURL, userId);
};

export const fetchDistanceMatrixData = (
  formattedOrigin,
  formattedDestination
) => {
  const requestUrl =
    DISTANCE_MATRIX_API_URL +
    `?origins=${formattedOrigin}` +
    `&destinations=${formattedDestination}` +
    `&mode=transit` +
    `&key=${GOOGLE_API_KEY}`;

  return axios.get(requestUrl);
};

export const generateUriFormattedPlaceAddress = (place) =>
  encodeURI(`${place.street_address} ${place.zip_code} ${place.state}`);
