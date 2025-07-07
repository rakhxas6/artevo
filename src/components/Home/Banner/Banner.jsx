import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollDownToProducts = () => {
    window.scrollTo({
      top: window.innerHeight * 1.25,
      behavior: "smooth",
    });
  };
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>ArtEvo.</h1>
          <p>
            ArtEvo Your Go to Site for Mobile Phones, EarBuds, SmartWatches,
            Speakers, Headphones and more...
          </p>
          <div className="ctas">
            <div className="banner-cta" onClick={scrollToBottom}>
              Read More
            </div>
            <div className="banner-cta v2" onClick={scrollDownToProducts}>
              Show Now
            </div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="hero-banner" />
      </div>
    </div>
  );
};

export default Banner;
