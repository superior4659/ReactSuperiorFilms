import "./about.css";
import smallimg from "../../img/download.png";
import aboutim from "../../img/video.svg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={aboutim}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About us</h1>
        <p className="a-sub">
         One alone cannot make a film, its a Team work.A best team can deliver a Finest Film,so here we are Superior Films.
        </p>
        <p className="a-desc">
          We make Short Films,Cover Songs ,Short Videos etc...

With pure dedication and hardwork to provide the best output we can. Total Movie depends on crew members work and dedication. we have great team members who dedicate themselves completly to get the best output. 
        </p>
        <div className="a-award">
          <img src={smallimg
          } alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Jaw Dropping visuals with Top Notch Editing</h4>
            <p className="a-award-desc">
             We provide top class cinematography with high quality cameras.We are one of the finest film makers in Kakinada . 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
