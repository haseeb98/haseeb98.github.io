import { Container, SkillsContainer, SkillsContent } from "./styles";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import vscodeicon from "../../assets/vscode-icon.svg";
import github from "../../assets/github.svg";
import bootstrap from "../../assets/bootstrap-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import adobexd from "../../assets/adobexd.png";
import styledcomponents from "../../assets/styledco-mponents .png";
import firebase from "../../assets/firebase.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";

interface Skills {
  title: string;
  color?: string;
  img?: string;
  id: number;
}

const cardSkills = [
  {
    id: 1,
    title: "HTML",
    img: htmlIcon,
    color: "#fc4503",
  },
  {
    id: 2,
    title: "CSS",
    img: cssIcon,
    color: "#0328fc",
  },
  {
    id: 3,
    title: "JavaScript",
    img: jsIcon,
    color: "#fefe01",
  },
  {
    id: 4,
    title: "TypeScript",
    img: typescriptIcon,
    color: "#007ACC",
  },
  {
    id: 5,
    title: "React Native",
    img: reactIcon,
    color: "#61DAFB",
  },
  {
    id: 6,
    title: "Firebase",
    img: firebase,
    color: "#61DAFB",
  },
  {
    id: 7,
    title: "Bootstrap",
    img: bootstrap,
    color: "#fff",
  },
  {
    id: 8,
    title: "AdobeXd",
    img: adobexd,
    color: "#9F70B8",
  },
  {
    id: 9,
    title: "Vs Code",
    img: vscodeicon,
    color: "#38BDF8",
  },
  {
    id: 10,
    title: "Node Js",
    img: nodeIcon,
    color: "#007fff",
  },
  {
    id: 11,
    title: "Git Hub",
    img: github,
    color: "#de4736",
  },
  {
    id: 12,
    title: "StyledComponents",
    img: styledcomponents,
    color: "#51c8c5",
  },
];
export function About() {
  return (
    <Container>
      <div className="about-text">
        <ScrollAnimation
          animateIn="fadeInLeft"
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            I'm a passionate Full Stack Developer with a love for turning ideas
            into powerful and intuitive digital solutions. My journey in web and
            mobile development has equipped me with a versatile skill set that
            encompasses both front-end and back-end technologies. With a keen
            eye for detail and a commitment to crafting user-friendly
            experiences,
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            My coding journey began with a fascination for creating interactive
            websites, and it has evolved into a dynamic skill set that includes
            expertise in HTML, CSS, JavaScript, and a range of programming
            languages and frameworks.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I'm excited about the ever-expanding possibilities in the
            development world, and I look forward to leveraging my skills to
            create innovative and impactful applications that make a real
            difference.
          </p>
        </ScrollAnimation>
      </div>
      <Title>
        <h2> Skills</h2>
      </Title>
      <SkillsContainer>
        {cardSkills.map((skill) => {
          return (
            <SkillsContent color={skill.color} key={skill.id}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}

              <img width={60} height={60} src={skill.img} alt={skill.title} />
              <h4>{skill.title}</h4>
            </SkillsContent>
          );
        })}
      </SkillsContainer>
    </Container>
  );
}

export const Title = styled.h2`
  position: relative;
  font-size: 2.2rem;
  font-weight: 800;
  margin: 2rem 0;
  padding-top: 2.1rem;
  color: ${(props) => props.theme.firstColor};
  z-index: 1;
  opacity: 1;
`;
