import { graphql, useStaticQuery } from "gatsby";

export const useData = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: dataJson {
        navigation {
          links {
            name
            to
          }
        }
        hero {
          headline
          image {
            mobile {
              src {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            desktop {
              src {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            alt
          }
        }
        about {
          headline
          description
          image {
            src {
              childImageSharp {
                gatsbyImageData
              }
            }
            alt
          }
        }
        creations {
          headline
          button
          projects {
            title
            image {
              mobile {
                src {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              desktop {
                src {
                  childImageSharp {
                    gatsbyImageData
                  }
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
