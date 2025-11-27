export default function PodcastCard({
  podcast: { title, image, seasons, updated },
}) {
  return (
    <div class="card">
      <img src={image} className="pod-cover" alt="" />
      <div>
        <h4 id="title">{title}</h4>
        <p id="seasons" className="seasons-text">
          {seasons}
        </p>
        <div id="genres" className="genre-tags"></div>
        <p id="updated" className="text-muted">
          {updated}
        </p>
      </div>
    </div>
  );
}
