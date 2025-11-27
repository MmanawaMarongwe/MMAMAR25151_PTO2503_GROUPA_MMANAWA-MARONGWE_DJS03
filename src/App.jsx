import { useState, useEffect } from "react";
import { fetchPodcasts } from "./api/fetchPodcasts";
import Header from "./components/Header";
import Filters from "./components/Filters";
import "./App.css";

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPodcasts(setError, setLoading, setPodcasts);
  }, []);

  return (
    <>
      <Header />
      <Filters />
      <main>
        {loading && <p>Loading Podcasts</p>}

        {error && <p>Error occurred while fetching podcasts: {error}</p>}

        {!loading && !error && <Header />}
      </main>
    </>
  );
}
