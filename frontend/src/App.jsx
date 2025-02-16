import { useEffect } from "react";
import axios from "axios";
import Aurora from "./components/Aurora/Aurora.jsx";
import TrueFocus from './components/Truefocus/TrueFocus.jsx';
import Orb from './components/Orbit/Orbit.jsx';
import Particles from './Components/Particles/Particles.jsx';
import GradientText from './Components/GradientText/GradientText.jsx';



function App() {
  //Testing connection with the backend 
  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  //Contains all the components managed in a single component
  const Main = () => {
    return (
      <div>

        <Aurora
          colorStops={["#FF9933", "#FFFFFF", "#138808"]}
          speed={0.5}
        />


        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div style={{ width: '100%', height: '500px', marginTop: "10vh", position: 'absolute' }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
        <TrueFocus
          sentence="पढ़ेगा इंडिया, तभी तो बढ़ेगा इंडिया।"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={1}
          pauseBetweenAnimations={0}
        />
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={true}
          className="custom-class w-[600px]"
        >
          
        </GradientText>
      </div>
    )
  }

  return (
    <>
      <Main />
    </>
  );
}

export default App;
