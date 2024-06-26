import Home from "./parallax/Home";
import About from "./parallax/About";
import Nav from "./parallax/Nav";
import Social from "./parallax/Social";
import Work from "./parallax/Work2";
import "@/parallax/Style.css";
import "./index.css";
import {
  Animator,
  Fade,
  FadeIn,
  ScrollContainer,
  ScrollPage,
  StickyIn,
  ZoomIn,
  batch,
} from "react-scroll-motion";
import { useEffect} from "react";
import ParallaxText from "./parallax/TxtParallax";
import Lenis from "lenis";

const App = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn(), Fade());
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="w-full h-screen flex items-center justify-center">
  //       <div className="loader">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <>
      <Nav />

      <ScrollContainer>
        <ScrollPage>
          <div id="home" className="h-screen">
            <Home />
          </div>
        </ScrollPage>
        <ScrollPage className="bg-black ">
          <div></div>
        </ScrollPage>
        <ScrollPage className="bg-black ">
          <Animator animation={ZoomInScrollOut}>
            <div className=" flex justify-end px-[330px] text-white ">
              <div className="text-head flex items-center w-fit ">
                AB
                <div className="letter-o ">
                  <div className="counter"></div>
                </div>
                UT
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage className="bg-[#06141D]">
          <div id="about">
            <ParallaxText text="About Me"></ParallaxText>
            <Animator animation={FadeIn()}>
              <About />
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage className="bg-black ">
          <div></div>
        </ScrollPage>
        <ScrollPage className="bg-black ">
          <Animator animation={ZoomInScrollOut}>
            <div className="text-white flex justify-center px-[330px]">
              <div className="flex items-center text-head  text-center   ">
                W
                <div className="letter-o mr-[20px]">
                  <div className="counter"></div>
                </div>
                RKS
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage className="bg-[#06141D] " style={{ height: "fit-content" }}>
          <div id="works">
            <ParallaxText text="My Works"></ParallaxText>
            <Work />
          </div>
        </ScrollPage>
      </ScrollContainer>
      <div className="z-50 fixed bottom-10 left-10">
        <Social />
      </div>
    </>
  );
};

export default App;
