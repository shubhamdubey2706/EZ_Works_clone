import "./App.css";
import Logo from "./components/Logo/Logo";
import ButtonView from "./components/ButtonView/ButtonView";
import CardView from "./components/CardView/CardView";
import CardImage from "./components/CardImage/CardImage";
import TextView from "./components/TextView/TextView";

export default function App() {
  return (
    <div className="container">
      <div className="column-3 column m-3">
        <Logo />
        <TextView size={30} title="Suite Of Business Support Services" />
        <TextView
          size={20}
          title="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed"
        />
        <div className="action-container">
          <ButtonView />
        </div>
      </div>
      <CardImage Image="" />
      <div className="column-7 grid">
        <div className="grid-container">
          <CardView
            title="Presentation Design"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
            image="/assets/img/Research@4x-5.png"
          />
          <CardView
            title="Audio - Visual Production"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
            image="/assets/img/Research@4x-2.png"
          />
          <CardView
            title="Translation Services"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
            image="/assets/img/Research@4x-1.png"
          />
          <CardView
            title="Graphic Design"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
            image="/assets/img/Research@4x-4.png"
          />
          <CardView
            title="Research & Analytics"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
            image="/assets/img/Research@4x.png"
          />
          <CardView
            title="Data Processing"
            description="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
            image="/assets/img/Research@4x-3.png"
          />
        </div>
      </div>
    </div>
  );
}
