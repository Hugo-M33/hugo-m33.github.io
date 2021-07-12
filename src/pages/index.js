import * as React from "react";
import { useEffect, useState } from "react";
import GlobalStyle from "../components/GlobalStyle";
import styled from "styled-components";
import ProfilePicture from "../components/ProfilePicture";
import SchoolCard from "../components/SchoolCard";
import useScroll from "react-use-scroll";
import { graphql } from "gatsby";
import { motion, useAnimation } from "framer-motion";
import Seo from "../components/Seo"


const schoolSctVariants = {
  visible: {
    padding: "60px 30px",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    padding: "0px 0px",
    transition: {
      when: "afterChildren",
    },
  },
};

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

const SchoolSection = styled(motion.section)`
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
const IndexPage = ({ data }) => {
  const scroll = useScroll();
  const [schoolSeen, setSchoolSeen] = useState(false);
  const schoolSctControls = useAnimation();

  useEffect(() => {
    const effect = async () => {
      if (scroll >= 200 && !schoolSeen) {
        await setSchoolSeen(true);
        schoolSctControls.start("visible");
      }
    };
    effect();
  }, [scroll, schoolSeen, schoolSctControls]);
  return (
    <Main>
      <Seo/>
      <GlobalStyle />
      <Header>
        <ProfilePicture />
        <TextBox>
          <h1>Hugo Martin</h1>
          <h2>Étudiant en informatique</h2>
        </TextBox>
      </Header>
      <SchoolSection
        variants={schoolSctVariants}
        initial={"hidden"}
        animate={schoolSctControls}
      >
        {data.allMarkdownRemark.edges.map((edge, i) => {
          return (
            <SchoolCard
              delay={(1 + i) * 0.4}
              style={{
                alignSelf: i % 2 === 0 ? "flex-end" : "flex-start",
                textAlign: i % 2 === 0 ? "right" : "left",
              }}
              status={edge.node.frontmatter.status}
            >
              <h1>{edge.node.frontmatter.title}</h1>
              <h2>{edge.node.frontmatter.location}</h2>
              <h3>{edge.node.frontmatter.date}</h3>
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

export const pageQuery = graphql`
  query SchoolCardsQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "school-cards-md" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            status
            location
            date
          }
        }
      }
    }
  }
`;

export default IndexPage;
