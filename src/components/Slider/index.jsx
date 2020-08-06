import React, { Component } from "react";
import PropTypes from "prop-types";
import Slide, { slidePropType } from "./Slide";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }
  prev = () => {
    this.setState({
      currentIndex:
        this.currentIndex === 0
          ? this.props.slides.length - 1
          : this.currentIndex - 1,
    });
  };
  next = () => {
    this.setState({
      currentIndex:
        this.currentIndex === this.props.slides.length - 1
          ? 0
          : this.currentIndex + 1,
    });
  };

  render() {
    console.log("props slides", this.props.slides);
    return (
      <article>
        {this.props.slides.map((s) => (
          <Slide slide={s} />
        ))}
        {/* <Slide slide={this.props.slides[this.currentIndex]} /> */}
        <button onClick={this.prev}>PREV</button>
        <button onClick={this.next}>NEXT</button>
      </article>
    );
  }
}

// class Slider extends Component {
// constructor(props) {
//   super(props)

//   this.state = {
//      currentIndex: 0,
//   }
// }

//   // const { slides } = props;
//   console.log('slides', this.props.slides);
//   slides.map(s => console.log('s', s));
//   const
// const prev = () => {
//   let index = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
//   console.log(`prev ${index}`);
//   return slides[index];
// };
// const next = () => {
//   let index = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
//   console.log(`next ${index}`);
//   return slides[index];
// };
//   render(){
//     return (
// <article>
//   {slides.map(s => (
//     <Slide slide={s} />
//   ))}
//   <button onClick={prev}>PREV</button>
//   <button onClick={next}>NEXT</button>
// </article>
//   )
//   }

// };

Slider.propTypes = {
  slides: PropTypes.arrayOf(slidePropType),
};

Slider.defaultProps = {
  slides: [],
};
export default Slider;
