import styled from 'styled-components';
import {theme} from '../../styles/Theme';
import {font} from '../../styles/Common';

const Footer = styled.footer `
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
  position: relative;
`

const Name = styled.span `
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
  letter-spacing: 3px;
`

const SocialList = styled.ul `
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialItem = styled.li `
  
`

const SocialLink = styled.a `
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${theme.animations.transition};
  color: ${theme.colors.accent};
  
  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`

const Copyright = styled.small `
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}