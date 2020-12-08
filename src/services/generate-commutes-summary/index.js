import {
  PLACES_API_URL,
  PLACES_API_APTS_ENDPOINT,
  PLACES_API_FAVS_ENDPOINT,
} from "config/vars";

import {
  fetchApartment,
  fetchDistanceMatrixData,
  fetchFavorites,
  generateUriFormattedPlaceAddress,
} from "./lib";

export default async (userId, apartmentId) => {
  const commutesSummary = {
    commutes: [],
  };

  // 1) Fetch the apartment by id and all favorites for user.
  const [apartment, favorites] = await Promise.all([
    fetchApartment(userId, apartmentId),
    fetchFavorites(userId),
  ]);

  let totalCommuteTime = 0;

  const formattedOrigin = generateUriFormattedPlaceAddress(apartment);
  const distanceMatrixRequests = favorites.map((favorite) => {
    const formattedDestination = generateUriFormattedPlaceAddress(favorite);
    const request = fetchDistanceMatrixData(
      formattedOrigin,
      formattedDestination
    ).then(({ rows: results }) => {
      console.log(results[0]);
      const { distance, duration } = results[0].elements[0];
      totalCommuteTime += duration.value;
      commutesSummary.commutes.push({
        favorite_id: favorite.id,
        distance,
        duration,
      });
    });
    return request;
  });

  await Promise.all(distanceMatrixRequests);

  commutesSummary.average_commute_time =
    totalCommuteTime / commutesSummary.commutes.length;

  return commutesSummary;
};
