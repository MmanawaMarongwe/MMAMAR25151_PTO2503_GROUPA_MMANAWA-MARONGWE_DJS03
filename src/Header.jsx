import podcastLogo from "./assets/podcast-logo.png";
import searchIcon from "./assets/search-icon.png";
import userImg from "./assets/user-profile.png";

export default function Header() {
  return (
    <header class="app-header">
      <div class="app-identity">
        <img
          src={podcastLogo}
          alt="A picture of the Podcast logo"
          class="app-logo"
        />
        <h1 class="app-name">CodeCast</h1>
      </div>

      <div class="user-section">
        <img
          src={searchIcon}
          alt="A picture of a search icon"
          class="search-icon"
        />
        <img src={userImg} alt="A user profile picture" class="profile-pic" />
      </div>
    </header>
  );
}
