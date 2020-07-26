import React from 'react';
import BackgroundImage from 'gatsby-background-image';

const BgImg = ({img, className}) => {
    return (
        <BackgroundImage className={className} fluid={img}>

        </BackgroundImage>
    )
}

export default BgImg
