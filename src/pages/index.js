import * as React from "react"
import {
  AdvantagesSection, ContactForm,
  ContentWrapper,
  Hero,
  HeroHeading,
  HeroParagraph,
  HighlightedHeading, ReviewsSection,
  ServicesSection,
  ShowcaseGallery,
  ShowcaseImage,
  ShowcaseSection,
  StyledButton, StyledLinkButton,
  StyledList, TeamImage, TeamSection,
  WelcomeSection,
  WelcomeSectionContent,
  WelcomeSectionImage,
} from '../assets/styles/pages/Homepage.style';

const Homepage = ({data} ) => (
  <>
    <Hero>
      <HeroHeading>Biuro nieruchomości</HeroHeading>
      <HeroParagraph>Lorem lorem lorem...</HeroParagraph>
    </Hero>
    <ContentWrapper>
      <WelcomeSection>
        <WelcomeSectionContent>
          <h2>
            Lorem lorem lorem lorem
            lorem lorem lorem.
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <p>
            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </WelcomeSectionContent>
        <WelcomeSectionImage />
      </WelcomeSection>
      <AdvantagesSection>
        <HighlightedHeading>Dlaczego szukasz właśnie nas?</HighlightedHeading>
        <StyledList>
          <li>
            <h3>
              Kompleksowa obsługa
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </li>
          <li>
            <h3>
              Agent na wyłączność
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </li>
          <li>
            <h3>
              Zgrany zespół
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </li>
        </StyledList>
      </AdvantagesSection>
      <ShowcaseSection>
        <h2>Oferta</h2>
        <div>
          <StyledButton isCentered>Bieżące oferty</StyledButton>
          <StyledButton isCentered>Nasze realizacje</StyledButton>
        </div>
        <ShowcaseGallery>
          <ShowcaseImage alt="#" />
          <ShowcaseImage isBig alt="#" />
          <ShowcaseImage alt="#" />
          <ShowcaseImage isBig alt="#" />
        </ShowcaseGallery>
      </ShowcaseSection>
      <ServicesSection>
        <HighlightedHeading>Twój komfort ponad wszystko</HighlightedHeading>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
        <StyledLinkButton>Sprawdź pełen zakres naszych usług</StyledLinkButton>
        <StyledList>
          <li>
            <h3>Pośrednictwo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </li>
          <li>
            <h3>Doradztwo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </li>
          <li>
            <h3>Home staging</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </li>
          <li>
            <h3>Współpraca z najlepszymi</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </li>
        </StyledList>
      </ServicesSection>
      <TeamSection>
        <HighlightedHeading>Poznaj nasz zespół</HighlightedHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <StyledLinkButton>Sprawdź, kim jesteśmy</StyledLinkButton>
        <TeamImage alt="" />
      </TeamSection>
      <ReviewsSection>
        <HighlightedHeading>
          Co mówią o nas nasi klienci?
        </HighlightedHeading>
        <p>
          Lorem lorem lorem lorem lorem lorem lorem lorem.
        </p>
        <div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>Adam</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>Ada</p>
          </div>
        </div>
      </ReviewsSection>
      <ContactForm action="#">
        <HighlightedHeading>Napisz do nas</HighlightedHeading>
        <label htmlFor="email">Adres e-mail</label>
        <input type="email" name="email" id="email" placeholder="Adres e-mail" />
        <label htmlFor="message">Treść</label>
        <textarea name="message" id="message" placeholder="Wiadomość" />
        <StyledButton>Wyślij</StyledButton>
      </ContactForm>
    </ContentWrapper>
  </>
);

export default Homepage;
