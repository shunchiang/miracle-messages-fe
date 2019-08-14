import React, { PureComponent } from "react";
import { connect } from "react-redux";

// Action imports
import { updatePopupAction } from "../../Actions/updatePopupAction";
import { slideToggleAction } from "../../Actions/SlideToggleAction";

const ICON = `m9.8727 26.636c-9.8326-4.5264-11.348-16.891-2.8851-23.548 3.6886-2.9014 12.082-2.9014 15.77 0 5.646 4.4411 7.1814 11.83 3.6589 17.607-3.6776 6.0315-10.795 8.587-16.544 5.9404zm12.5-9.136c0-2.0755 0.49347-3.5 1.2124-3.5 0.66682 0-1.0045-2.2507-3.714-5.0016l-4.9264-5.0016-4.8145 4.7421c-2.648 2.6082-4.3517 4.8964-3.786 5.085s1.0285 1.8803 1.0285 3.7595v3.4167h15zm-13-0.67431v-3.1743l2.3145 2.1743c2.8798 2.7054 3.4913 2.7054 6.3711 0l2.3144-2.1743v6.3486h-11zm3-2.3257-2.3486-2.5h9.6973l-2.3486 2.5c-1.2917 1.375-2.4167 2.5-2.5 2.5-0.08326 0-1.2083-1.125-2.5-2.5zm-0.0014-5.9985c2.1997-2.3415 2.4621-2.3946 4.1743-0.84501 2.7925 2.5272 2.2195 3.3435-2.3472 3.3435h-4.1743l2.3472-2.4985z`;

const pinStyle = {
  cursor: "pointer",
  fill: "#2d2d2d",
  stroke: "none"
};

class CityPin extends PureComponent {
  render() {
    const PinClickHandler = () => {
      this.props.updatePopupAction(this.props.city);
      this.props.slideToggleAction();
    };
    const size = 20;

    return (
      <svg
        height={size}
        viewBox="0 0 30 30"
        style={{
          ...pinStyle,
          transform: `translate(${-size / 2}px,${-size}px)`
        }}
        onClick={PinClickHandler}
      >
        <path d={ICON} />
        <path
          d="m9.8727 26.636c-9.8326-4.5264-11.348-16.891-2.8851-23.548 3.6886-2.9014 12.082-2.9014 15.77 0 5.646 4.4411 7.1814 11.83 3.6589 17.607-3.6776 6.0315-10.795 8.587-16.544 5.9404zm12.5-9.136c0-2.0755 0.49347-3.5 1.2124-3.5 0.66682 0-1.0045-2.2507-3.714-5.0016l-4.9264-5.0016-4.8145 4.7421c-2.648 2.6082-4.3517 4.8964-3.786 5.085s1.0285 1.8803 1.0285 3.7595v3.4167h15zm-13-0.67431v-3.1743l2.3145 2.1743c2.8798 2.7054 3.4913 2.7054 6.3711 0l2.3144-2.1743v6.3486h-11zm3-2.3257-2.3486-2.5h9.6973l-2.3486 2.5c-1.2917 1.375-2.4167 2.5-2.5 2.5-0.08326 0-1.2083-1.125-2.5-2.5zm-0.0014-5.9985c2.1997-2.3415 2.4621-2.3946 4.1743-0.84501 2.7925 2.5272 2.2195 3.3435-2.3472 3.3435h-4.1743l2.3472-2.4985z"
          fill="#2d2d2d"
        />
      </svg>
    );
  }
}

const mapStateToProps = state => {
  return {
    popupInfo: state.mapReducer.popupInfo
  };
};

export default connect(
  mapStateToProps,
  { updatePopupAction, slideToggleAction }
)(CityPin);