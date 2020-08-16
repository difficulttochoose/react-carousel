import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Slider.module.scss';
import classNames from 'classnames';
import Icon from '@mdi/react';
import {
  mdiFullscreenExit,
  mdiFullscreen,
  mdiPlay,
  mdiPause,
  mdiChevronRight,
  mdiChevronLeft,
} from '@mdi/js';

function Controls(props) {
  const {
    sliderSpeed,
    isRunning,
    isFullScreen,
    fullScreen,
    handleChange,
    switchSlides,
    next,
    prev,
  } = props;
  return (
    <>
      <div
        className={classNames(
          styles.flexContainer,
          styles.settings,
          styles.switchSlidesButtons
        )}
      >
        <Icon
          onClick={prev}
          className={styles.icon}
          path={mdiChevronLeft}
          alt="Previous slide"
          title="Previous slide"
        />
        <Icon
          onClick={next}
          className={styles.icon}
          path={mdiChevronRight}
          alt="Next slide"
          title="Next slide"
        />
      </div>
      <div className={classNames(styles.flexContainer, styles.settings)}>
        <Icon
          onClick={switchSlides}
          className={styles.icon}
          path={!isRunning ? mdiPlay : mdiPause}
          alt={!isRunning ? 'Play' : 'Pause'}
          title={!isRunning ? 'Play' : 'Pause'}
        />
        <div className={styles.slideShowSpeed}>
          Delay
          <input
            type="range"
            min="1"
            max="5000"
            value={sliderSpeed}
            onChange={handleChange}
          />
          {sliderSpeed}
        </div>
        <Icon
          onClick={fullScreen}
          className={styles.icon}
          path={isFullScreen ? mdiFullscreenExit : mdiFullscreen}
          alt="Full screen"
          title="Full screen"
        />
      </div>
    </>
  );
}

Controls.propTypes = {
  sliderSpeed: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  isRunning: PropTypes.bool.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  fullScreen: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  switchSlides: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
};

export default Controls;
