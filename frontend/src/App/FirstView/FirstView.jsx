import "./FirstView.css";
import Image from "../../Media/imagehome.png";
import Image2 from "../../Media/imagehome2.png";
import Image3 from "../../Media/imagehome3.png";
import NavBar from "./NavBar/NavBar";
import Buttom from "../buttom/buttom";

function FirstView() {
  return (
    <>
      <NavBar />
      <div className="firstView">
        <div className="hmeCntent">
          <div className="imagehome">
            <div className="imageText">
              <img src={Image2} alt="imagehome2" />
            </div>
            <div className="images">
            <div className="peopleImage">
              <img src={Image} alt="imagehome" />
            </div>
            <div className="grup">
                <img src={Image3} alt="imagehome3" />
              </div>
            </div>
          </div>
          <div className="textCntent">
            <p>look for and discover new products!</p>
            <Buttom
              content="See more..."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstView;
