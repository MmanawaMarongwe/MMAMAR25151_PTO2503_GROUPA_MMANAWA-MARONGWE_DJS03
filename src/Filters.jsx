export default function Filters() {
  return (
    <section class="filter-area">
      <label for="genre-options">Filter by:</label>
      <select name="genre" id="genre-options">
        <option value="All Genres">All Genres</option>
      </select>
      <select name="recently-updated" id="most-recent">
        <option value="recent">Recently updated</option>
        <option value="popular">Most popular</option>
        <option value="newest">Newest</option>
      </select>
    </section>
  );
}
