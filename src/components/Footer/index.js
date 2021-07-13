import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin,} from "react-icons/fa";
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinksTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink,} from './FooterElement';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>About us</FooterLinksTitle>
                <FooterLink to='/'>How it works</FooterLink>
                <FooterLink to='/'>Testimonials</FooterLink>
                <FooterLink to='/'>Carrers</FooterLink>
                <FooterLink to='/'>Investor</FooterLink>
                <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Contact Us</FooterLinksTitle>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Support</FooterLink>
                <FooterLink to='/'>Lost or stolen cards</FooterLink>
                <FooterLink to='/'>Trouble logging </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>Videos</FooterLinksTitle>
                <FooterLink to='/'>Submit Video</FooterLink>
                <FooterLink to='/'>Ambassadors</FooterLink>
                <FooterLink to='/'>Agency</FooterLink>
                <FooterLink to='/'>Influencer</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Social Media</FooterLinksTitle>
                <FooterLink to='/'>Instagram</FooterLink>
                <FooterLink to='/'>Facebook</FooterLink>
                <FooterLink to='/'>Youtube</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Ocean Bank Inc.
            </SocialLogo>
            <WebsiteRights>Ocean Bank Inc. © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='//' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='//' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='//' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='//' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='//' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;