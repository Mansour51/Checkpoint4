import ConnectionModal from "../components/ConnectionModal";

import desktopBackground from "../assets/Vente voiture.png";
import "../styles/homePage.css";

function HomePage() {
  return (
    <div className="home_page">
      <ConnectionModal />
      <img src={desktopBackground} alt="vente voiture" />
    </div>
  );
}

export default HomePage;
