import { Container } from "./styles";
import emailIcon from "../../assets/google.svg";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI?</p>
        <p>MY INBOX IS OPEN FOR ALL</p>
      </header>
      <div className="contacts">
        <div>
          <a href="haseeb943@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <h3>haseeb943@gmail.com</h3>
        </div>
      </div>
    </Container>
  );
}
