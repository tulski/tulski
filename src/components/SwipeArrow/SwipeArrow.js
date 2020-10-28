import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, useTransform, useAnimation, MotionValue } from 'framer-motion';
import { useIntersectionObserver } from '@researchgate/react-intersection-observer';
import { Link } from 'react-scroll';
import { media } from 'utils';

const StyledLink = styled(Link)`
  position: absolute;
  left: calc(50% - 1.5rem);
  top: calc(100vh - 4rem);
  width: 3rem;
  stroke: ${({ theme }) => theme.secondary};
  cursor: pointer;

  ${media.mobileL`
    left: calc(50% - 1.25rem);
    width: 2.5rem;
  `}
`;

const SwipeArrow = ({ scrollYProgress }) => {
  const arrowControls = useAnimation();
  const opacity = useTransform(scrollYProgress, [0, 0.1666], [1, 0]);
  const handleChange = (entry) => {
    if (entry.isIntersecting) {
      arrowControls.start({
        y: ['-20%', '20%', '-20%'],
        transition: {
          duration: 2,
          repeat: Infinity,
          type: 'spring',
        },
      });
    } else arrowControls.stop();
  };
  const [ref] = useIntersectionObserver(handleChange);

  return (
    <StyledLink to="about" smooth>
      <motion.svg
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        animate={arrowControls}
        style={{ opacity }}
      >
        <path d="M13 1L7 7L1 1" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </StyledLink>
  );
};

SwipeArrow.propTypes = {
  scrollYProgress: PropTypes.instanceOf(MotionValue).isRequired,
};

export default SwipeArrow;
