import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";
import csharp from "../assets/c-sharp.png";
import cplus from "../assets/cplusplus.png";
import fsharp from "../assets/fsharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "SQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: java,
      title: "Java",
      style: "shadow-red-400",
    },
    {
      id: 10,
      src: csharp,
      title: "C#",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: cplus,
      title: "C++",
      style: "shadow-orange-400",
    },
    {
      id: 12,
      src: fsharp,
      title: "F#",
      style: "shadow-purple-400",
    },
  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I always strive to nurture the will to broaden my own understanding of aspects of the natural world - gaining and applying knowledge effectively and fluidly in order to build synergy with those I work with.</p>
                        <div name="experience" className="">
                          <div className="max-w-screen-lg mx-auto p-1 flex flex-col justify-center w-full h-full text-white">
                            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                              {techs.map(({ id, src, title, style }) => (
                                <div
                                  key={id}
                                  className={`shadow-md hover:scale-105 duration-500 rounded-lg ${style}`}                               >
                                  <img src={src} alt="" className="w-25 mx-auto" />
                                  <p className="mt-3">{title}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
