import { Helmet } from "react-helmet";
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          title
          email
          description
        }
      }
    }
  `);

  const { siteUrl, title, description } = data.site.siteMetadata;
  return (
    <Helmet>
       <title>{title}</title>
      <link rel="canonical" href={siteUrl} />
      <meta name="description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
