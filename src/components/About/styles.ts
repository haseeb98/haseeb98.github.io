import styled from "styled-components";

export const Container = styled.section`
  padding-top: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;
export const SkillsContainer = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 468px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 994px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const SkillsContent = styled.div`
  width: 15rem;
  height: 10rem;

  border-radius: 25px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    z-index: 1;
  }

  img {
    z-index: 1;
  }

  .border {
    &::before {
      z-index: -1;
      content: "";
      position: absolute;
      width: 5rem;
      height: 17rem;
      left: 4.5rem;
      top: -40%;
      background: ${(props) => props.color};
      animation: barra 6s linear 0s infinite normal none running;
      border-radius: 10px;

      @keyframes barra {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    }

    ::after {
      content: "";
      position: absolute;
      inset: 5px;
      background: ${(props) => props.theme.backgroundAlt};
      border-radius: 20px;
    }
  }
`;

export const Vector = styled.div`
  position: relative;
  z-index: -10;
  width: 90vw;
  top: -20vw;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @media (min-width: 468px) {
    top: 1vw;
  }

  .js {
    position: absolute;
    right: 0vw;
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }
  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  .h3 {
    margin-top: 2rem;
    color: var(--green);
  }
  .html {
    position: absolute;
    left: 0vw;
  }
  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
`;
