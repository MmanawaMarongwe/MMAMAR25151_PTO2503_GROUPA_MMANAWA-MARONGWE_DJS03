import { genres } from "../data";

export function genreList(genreIds, allGenres = []) {
  if (!Array.isArray(genreIds)) return [];

  return genreIds
    .map((id) => allGenres.find((g) => g.id === id)?.title)
    .filter(Boolean);
}
