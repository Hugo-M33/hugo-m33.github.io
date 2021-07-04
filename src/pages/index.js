import * as React from "react"
import GlobalStyle from "../components/GlobalStyle"
import styled from "styled-components"
import ProfilePicture from "../components/ProfilePicture"



// Styled Components
const Main = styled.main`
margin: 0;
`

const Header = styled.header`
background: #7f7fd5; /* Compatibilité */
background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
width: 100vw;
height: 100vh;
display: grid;
grid-template-rows: 6fr 4fr;
place-items: center;
`

const TextBox = styled.div`
text-align:center;
background-color: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(30px);
padding: 1.5em 3em;
border-radius: 30px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

h1,h2 {
  margin: 16px 0;
  color: white;
  font-family: sans-serif;
}

h2 {
  font-weight: 300
}
`

const SchoolSection = styled.section`
min-height: 100vh;
width: 100vw;

display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
h2,h3 {
  font-size: 3em;
}
`

const ProjectsSection = styled.section`
min-height: 100vh;
width: 100vw;
background: #4e54c8;  /* Compatibilité */
background: linear-gradient(to right, #8f94fb, #4e54c8);
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
color: white;
h2,h3 {
  font-size: 3em;
}

`





// markup
const IndexPage = () => {
  return (
    <Main>
      <GlobalStyle/>
      <Header>
        <ProfilePicture/>
        <TextBox>
          <h1>Hugo Martin</h1>
          <h2>Étudiant en informatique</h2>
        </TextBox>
      </Header>
      <SchoolSection>
        <h2>Parcours Scolaire</h2>
        <h3>Coming Soon...</h3>
      </SchoolSection>
      <ProjectsSection>
        <h2>Projets</h2>
        <h3>Coming Soon...</h3>

      </ProjectsSection>
    </Main>
  )
}

export default IndexPage
