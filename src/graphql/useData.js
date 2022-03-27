import { graphql, useStaticQuery } from "gatsby";

export const useHomePageData = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: dataJson {
        navigation {
          links {
            name
            to
          }
        }
        header {
          headline
          image {
            src {
              childImageSharp {
                gatsbyImageData
              }
            }
            alt
          }
        }
        about {
          headline
          description
        }
        creations {
          headline
          button
          projects {
            title
            image {
              src {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
          }
        }
        footer {
          socials {
            name
            href
            icon {
              publicURL
            }
          }
          copyright
        }
      }
    }
  `);

  return data;
};
