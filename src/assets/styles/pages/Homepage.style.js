import styled from 'styled-components';
import { Link } from 'gatsby';
import arrowIcon from '../../styles/arrow.svg';

export const Hero = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%;
  padding: 35px;
`;

export const HeroHeading = styled.h1`
  margin: 0;
`;

export const HeroParagraph = styled.p`
`;

export const ContentWrapper = styled.div`
  padding: 0 20px;
`;

const StyledSection = styled.section`
  margin: 100px 0;
`;

export const WelcomeSection = styled(StyledSection)`
  margin: 70px 0;
  padding: 0 20px;
`;

export const WelcomeSectionContent = styled.div`
  padding: 30px 20px;
  position: relative;
  h2 {
    margin: 0 0 20px 0;
    font-size: 2.5rem;
    font-weight: 400;
    color: white;
  }
  p {
    color: white;
  }
  &::after {
    position: absolute;
    width: 70px;
    height: 70px;
    content: '';
    clip-path: polygon(0 16%, 0 0, 100% 0, 100% 100%, 84% 100%, 84% 16%);
    right: -20px;
    top: -20px;
  }
`;

export const WelcomeSectionImage = styled.div`
  margin-top: 10px;
  width: 90%;
  height: 170px;
  position: relative;
  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-size: cover;
  &::after {
    position: absolute;
    width: 70px;
    height: 70px;
    content: '';
    clip-path: polygon(0 0, 16% 0, 16% 84%, 100% 84%, 100% 100%, 0 100%);
    left: -20px;
    bottom: -20px;
  }
`;

export const AdvantagesSection = styled(StyledSection)``;
export const ServicesSection = styled(StyledSection)``;

export const HighlightedHeading = styled.h2`
  position: relative;
  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    width: 100%;
    left: -50%;
  }
`;

export const StyledList = styled.ul`
  padding: 0;
  list-style: none;
  li {
    margin: 30px 0;
    h3 {
      font-weight: 700;
      margin: 0;
    }
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  padding: 10px 15px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  margin: ${({ isCentered }) => (isCentered ? '15px auto' : '15px 0')};
`;

export const StyledLinkButton = styled(Link)`
  text-decoration: underline;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    background-image: url("${arrowIcon}");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0 50%;
    width: 20px;
    height: 20px;
    right: -35px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ShowcaseSection = styled(StyledSection)`
  h2 {
    text-align: center;
    margin: 30px 0;
  }
`;

export const ShowcaseGallery = styled.div`
  margin: 50px 0;
`;

export const ShowcaseImage = styled.img`
  width: 100%;
  height: ${({ isBig }) => (isBig ? '250px' : '125px')};
  object-fit: cover;
  margin: 10px 0;
`;

export const TeamSection = styled(StyledSection)``;

export const TeamImage = styled.div`
  margin-top: 30px;
  width: 90%;
  height: 300px;
  position: relative;
  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-size: cover;
  &::after {
    position: absolute;
    width: 70px;
    height: 70px;
    content: '';
    clip-path: polygon(84% 0, 84% 84%, 0 84%, 0 100%, 100% 100%, 100% 0%);
    right: -20px;
    bottom: -20px;
  }
`;

export const ReviewsSection = styled(StyledSection)``;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  
  label {
    font-weight: 500;
    margin: 15px 0 0;
  }
  
  input, textarea {
    margin: 5px 0;
    resize: none;
    padding: 5px;
  }
  
  textarea {
    min-height: 200px;
  }
`;