/**
 * @function fetchPodcasts
 * Asynchronously fetches podcast data from the remote API and updates state accordingly.
 * Handles loading, error, and successful data response via provided state setters.
 *
 * @param {Function} setPodcasts - State setter function to update the podcasts array.
 * @param {Function} setError - State setter function to update the error message (string).
 * @param {Function} setLoading - State setter function to toggle the loading state (boolean).
 *
 * @returns {Promise<void>} A promise that resolves when the fetch process completes.
 *
 **/
export async function fetchPodcasts(setPodcast, setError, setLoading) {
  try {
    const res = await fetch("https://podcast-api.netlify.app/");
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json();
    const podcastsArray = Array.isArray(data) ? data : [data];
    setPodcast(podcastsArray);
  } catch (err) {
    console.err("Failed to fetch", err);
    setError("Failed to load podcasts. Please try again later.");
  } finally {
    setLoading = false;
  }
}
