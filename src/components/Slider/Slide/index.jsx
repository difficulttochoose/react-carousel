import React from "react";
import PropTypes from "prop-types";
import styles from "./Slide.module.scss";
import classNames from "classnames";

function Slide(props) {
  const {
    slide: { src, description, title },
  } = props;
  return (
    <figure className={styles.wrapper}>
      <img src={src} alt={title} style={{ width: "100%", height: "100%" }} />
      <figcaption className={classNames(styles.invisible, styles.description)}>
        {description}
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
