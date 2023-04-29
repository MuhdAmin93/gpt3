

import "./possibility.css"
import possibilityImage from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>AI is capable of generating art, music, and literature that is almost indistinguishable from those created by humans, blurring the lines between human and machine creativity.</p>
        <h4> Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
