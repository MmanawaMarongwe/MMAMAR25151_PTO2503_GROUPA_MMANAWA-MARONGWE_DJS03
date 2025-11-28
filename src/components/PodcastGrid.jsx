import PodcastCard from "./PodcastCard";

export default function PodcastGrid({ podcasts = [] }) {
  console.log("PodcastGrid podcasts:", podcasts);
  const podcastElements = podcasts.map((podcast) => {
    return (
      <PodcastCard
        key={podcast.id}
        title={podcast.title}
        image={podcast.image}
        seasons={podcast.seasons}
        updated={podcast.updated}
      />
    );
  });

  return (
    <>
      <section className="podcast-grid">{podcastElements}</section>
    </>
  );
}
