import * as React from "react";
import {useEffect,useState} from "react";
import GlobalStyle from "../components/GlobalStyle";
import styled from "styled-components";
import ProfilePicture from "../components/ProfilePicture";
import SchoolCard from "../components/SchoolCard";
import useScroll from 'react-use-scroll'

const schoolsteps = [
  {
    title: "Baccalauréat Scientifique",
    location: "Lycée Fénelon Notre-Dame - La Rochelle",
    year: "2019 - 2020",
    status: "OK"
  },
  {
    title: "DUT Informatique 1ère année",
    location: "IUT - Université de Bordeaux",
    year: "2020 - 2021",
    status: "OK",
  },
  {
    title: "DUT Informatique 2ème année",
    location: "IUT - Université de Bordeaux",
    year: "2021 - 2022",
    status: "ONGOING",
  },
  {
    title: "Diplôme d'ingénieur informatique ?",
    location: "École d'ingénieur en alternance ?",
    year: "2022 - 2025",
    status: "FUTURE",
  },
];

// Styled Components
const Main = styled.main`
  margin: 0;
`;

const Header = styled.header`
  background: #7f7fd5; /* Compatibilité */
  background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 6fr 4fr;
  place-items: center;
`;

const TextBox = styled.div`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  padding: 1.5em 3em;
  border-radius: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  h1,
  h2 {
    margin: 16px 0;
    color: white;
    font-family: sans-serif;
  }

  h2 {
    font-weight: 300;
  }
`;

const SchoolSection = styled.section`
  min-height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 60px 30px;
`;

const ProjectsSection = styled.section`
  min-height: 100vh;
  width: 100vw;
  background: #4e54c8; /* Compatibilité */
  background: linear-gradient(to right, #8f94fb, #4e54c8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  h2,
  h3 {
    font-size: 3em;
  }
`;

// markup
const IndexPage = () => {
  const scroll = useScroll();
  const [schoolSeen, setSchoolSeen] = useState(false);

  useEffect(() => {
    if (scroll >= 200 && !schoolSeen) {
      setSchoolSeen(true);
    }
  }, [scroll, schoolSeen])
  return (
    <Main>
      <GlobalStyle />
      <Header>
        <ProfilePicture />
        <TextBox>
          <h1>Hugo Martin</h1>
          <h2>Étudiant en informatique</h2>
        </TextBox>
      </Header>
      <SchoolSection>
        {schoolSeen && schoolsteps.map((step, i) => {
          return (
            <SchoolCard delay={(1+i)*0.4} style={{alignSelf: i%2 === 0 ? "flex-end" : "flex-start", textAlign: i%2 === 0 ? "right" : "left"}} status={step.status}>
              <h1>{step.title}</h1>
              <h2>{step.location}</h2>
              <h3>{step.year}</h3>
            </SchoolCard>
          );
        })}
      </SchoolSection>
      <ProjectsSection>
        <h2>Projets</h2>
        <h3>Coming Soon...</h3>
      </ProjectsSection>
    </Main>
  );
};

export default IndexPage;
