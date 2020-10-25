import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const ImageBackground = styled(BackgroundImage)`
    height: 700px; 
`;

const TextImage = styled.div`
    background-image: linear-gradient(to top, rgba(34, 49, 63, .8),rgba(34, 49, 63, .8) );
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

  
    h1{
        font-size: 4rem;
        margin: 0;

        @media (min-width: 992px){
            font-size: 5.8rem;
            padding: 15%;
        }
    }
    p {
        font-size: 2rem;
        @media (min-width: 992px){
            font-size: 2.6rem;
        }
    }
`;


const ImagenHotel = () => {

    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: {eq: "8.jpg"}){
          sharp: childImageSharp{
            fluid{
              srcSetWebp
            }
          }
        }
      }
    `);

    // console.log(image);

    return (
        <ImageBackground
            tag="section"
            fluid={image.sharp.fluid}
            fadeIn="soft"
        >
            <TextImage>
                <h1>Bienvenido a Hotel Gatsby</h1>
                <p>El Mejor Lugar para tus Vacaciones Soñadas</p>
            </TextImage>
        </ImageBackground>
    )
}

export default ImagenHotel
