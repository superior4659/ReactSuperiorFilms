import "./intro.css";
import Me from "../../img/me.svg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello There, Welcome To </h2>
          <h1 className="i-name">Superior Films</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Cinematography</div>
              <div className="i-title-item">Editing</div>
              <div className="i-title-item">Actors</div>
              <div className="i-title-item">Best Team</div>
              
            </div>
          </div>
          <p className="i-desc">
            The place where you can make your scripts real by adding best cinematography and top notch editing . 
          </p>
        </div>
       
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
