import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const pfpStyle = {
    borderRadius: 30,
    border: "2px solid rgba(255,255,255,.3",
    
  }
  
  const pfpWrapperStyle = {
    borderRadius: 30,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
  }

const ProfilePicture = () => {
    return (
        <StaticImage
          src="../images/profile.png"
          alt="Photo de profil"
          imgStyle={pfpStyle}
          style={pfpWrapperStyle}
          />
    )
}

export default ProfilePicture
