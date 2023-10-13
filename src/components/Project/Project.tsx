import { Container } from "./styles";
import hayhay from "../../assets/hayhay.webp";
import ScrollAnimation from "react-animate-on-scroll";
import deadasss from "../../assets/deadasss.png";
import skill from "../../assets/skill.png";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a
                  href="https://www.hayhayapp.se/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img style={{ width: "90%" }} src={hayhay} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>HayHay</h3>

              <p>
                Developed and maintained the HayHay mobile application using
                React Native, ensuring a seamless user experience on both iOS
                and Android platforms.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Full Stack Developer</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a
                  href="https://www.deadasss.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ width: "60%" }}
                    src={deadasss}
                    alt="Visit site"
                  />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>DEADASSS</h3>
              <p>
                The app was initially built using React Native, but recognizing
                the need for a more robust and efficient framework, I
                spearheaded the migration process from React Native to Expo.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Full Stack Developer</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a
                  href="https://github.com/haseeb98/skill-test"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img style={{ width: "100%" }} src={skill} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Skill Test</h3>
              <p>
                I worked as frontend web developer to design web based page.I
                was given a file from which I extracted the images. The
                instructions called for the site to be fully responsive, and for
                the carousel to convert to an accordion when on a mobile screen.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Frontend Developer</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
