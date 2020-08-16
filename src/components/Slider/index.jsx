import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide, { slidePropType } from './Slide';
import styles from './Slider.module.scss';
import classNames from 'classnames';
import Controls from './Controls';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isRunning: false,
      isFullScreen: false,
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
    const { isFullScreen } = this.state;
    this.setState({
      isFullScreen: !isFullScreen,
    });
  };

  render() {
    const { currentIndex, value, isRunning, isFullScreen } = this.state;
    const containerClassName = classNames(styles.container, {
      [styles.fullScreenContainer]: isFullScreen,
    });
    return (
      <div className={containerClassName}>
        <Slide slide={this.props.slides[currentIndex]} />
        <Controls
          sliderSpeed={value}
          isRunning={isRunning}
          isFullScreen={isFullScreen}
          fullScreen={this.fullScreen}
          handleChange={this.handleChange}
          switchSlides={this.switch}
          next={this.next}
          prev={this.prev}
        />
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
