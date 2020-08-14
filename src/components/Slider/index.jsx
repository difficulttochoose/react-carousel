import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide, { slidePropType } from './Slide';
import styles from './Slider.module.scss';
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

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isRunning: false,
      value: 1000,
    };
    this.timeoutId = null;
  }

  clear = () => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  };

  setCurrentIndex = v => this.setState({ currentIndex: v });

  prev = () => {
    const { currentIndex } = this.state;
    const {
      slides: { length },
    } = this.props;
    this.setCurrentIndex((currentIndex - 1 + length) % length);
  };

  next = () => {
    const { currentIndex } = this.state;
    const {
      slides: { length },
    } = this.props;
    this.setCurrentIndex((currentIndex + 1) % length);
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  componentDidMount() {
    this.setState({
      isRunning: true,
    });
  }

  componentDidUpdate() {
    const { isRunning, value } = this.state;
    this.clear();
    if (isRunning) {
      this.timeoutId = setTimeout(this.next, value);
    }
  }

  componentWillUnmount() {
    this.clear();
  }

  switch = () => {
    const { isRunning } = this.state;
    this.setState({
      isRunning: !isRunning,
    });
  };

  fullScreen = () => {
    if (!document.fullscreenElement) {
      document.getElementById('root').requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  render() {
    const { currentIndex, value, isRunning } = this.state;
    const containerClassName = classNames(styles.container, {
      [styles.fullScreenContainer]: document.fullscreenElement,
    });
    return (
      <div className={containerClassName}>
        <Slide slide={this.props.slides[currentIndex]} />
        <div
          className={classNames(
            styles.flexContainer,
            styles.settings,
            styles.switchSlidesButtons
          )}
        >
          <Icon
            onClick={this.prev}
            className={styles.icon}
            path={mdiChevronLeft}
            alt="Previous slide"
            title="Previous slide"
          />
          <Icon
            onClick={this.next}
            className={styles.icon}
            path={mdiChevronRight}
            alt="Next slide"
            title="Next slide"
          />
        </div>
        <div className={classNames(styles.flexContainer, styles.settings)}>
          <Icon
            onClick={this.switch}
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
              value={value}
              onChange={this.handleChange}
            />
            {value}
          </div>
          <Icon
            onClick={this.fullScreen}
            className={styles.icon}
            path={
              document.fullscreenElement ? mdiFullscreenExit : mdiFullscreen
            }
            alt="Full screen"
            title="Full screen"
          />
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(slidePropType),
};

Slider.defaultProps = {
  slides: [],
};

export default Slider;
