export default function PodcastCard({ title, image, seasons, updated }) {
  return (
    <div className="card">
      <img src={image} className="pod-cover" alt="" />
      <div>
        <h4 id="title">{title}</h4>
        <p id="seasons" className="seasons-text">
          ♡ {seasons} Seasons
        </p>
        <div id="genres" className="genre-tags">
          Placeholder
        </div>
        <p id="updated" className="text-muted">
          Updated {updated}
        </p>
      </div>
    </div>
  );
}
