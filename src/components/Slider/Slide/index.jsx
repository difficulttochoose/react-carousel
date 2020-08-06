import React from 'react';
import PropTypes from 'prop-types';

function Slide(props) {
  const {
    slide: { src, description, title },
  } = props;
  console.log(props);
  return (
    <figure>
      <img src={src} alt={title} />
      <figcaption>{description}</figcaption>
    </figure>
  );
}

export const slidePropType = PropTypes.shape({
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

Slide.propTypes = {
  slide: slidePropType,
  className: PropTypes.string,
};

export default Slide;
