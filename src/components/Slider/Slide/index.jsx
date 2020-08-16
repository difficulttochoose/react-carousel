import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slide.module.scss';

function Slide(props) {
  const {
    slide: { src, description, title },
  } = props;
  return (
    <figure className={styles.slideWrapper}>
      <img src={src} alt={title} className={styles.slideImage} />
      <figcaption className={styles.descriptionWrapper}>
        <div className={styles.descriptionTitle}>{title}</div>
        <div className={styles.description}>{description}</div>
      </figcaption>
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
