import axios from "axios";
import { getRequest } from "util/fetch";

import {
  PLACES_API_URL,
  PLACES_API_APTS_ENDPOINT,
  PLACES_API_FAVS_ENDPOINT,
} from "config/vars";

import { fetchApartment, fetchFavorite } from "./lib";
import Axios from "axios";

export default async (userId, apartmentId) => {
  const commutesSummary = {};
  try {
    const [apartment, favorites] = await Promise.all([
      fetchApartment(userId, apartmentId),
      fetchFavorite(userId),
    ]);

    const totalCommutes = 0;
    const totalCommuteTime = 0;

    const origin = `${apartment.street_address}+${apartment.zip_code}+${apartment.state}`;

    for (const favorite of favorites) {
      const destination = `${favorite.street_address}+${favorite.zip_code}+${favorite.state}`;
      const requestUrl =
        "https://maps.googleapis.com/maps/api/directions/json" +
        `?origin=${origin}` +
        `&destination=${destination}` +
        `&key=${process.env.GOOGLE_DIRECTIONS_API_KEY}`;

      axios.get(requestUrl).then((response) => console.log(response));
    }

    commutesSummary.avg_commute_time = 0;
    commutesSummary.routes = favorites.map((item) => item.id);
  } catch (e) {
    console.log(e);
  }

  return commutesSummary;
};
