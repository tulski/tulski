import styled from 'styled-components';
import { Element } from 'react-scroll';
import { media } from 'utils';

const SectionTemplate = styled(Element)`
  scroll-snap-align: start;
  padding: 2rem;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;

  ${media.mobileL`
  padding: 1rem;
  `}
`;

export default SectionTemplate;
