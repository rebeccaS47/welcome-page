import PropTypes from "prop-types";

const CallAction = ({ isCallAction }) => {
  return (
    <div
      className="container hidcon"
      style={{ display: isCallAction ? "flex" : "none" }}
    >
      <div className="box">
        <p>Content Box 5</p>
      </div>
      <div className="box">
        <p>Content Box 6</p>
      </div>
      <div className="box">
        <p>Content Box 7</p>
      </div>
      <div className="box">
        <p>Content Box 8</p>
      </div>
    </div>
  );
};

CallAction.propTypes = {
  isCallAction: PropTypes.bool.isRequired,
};

export default CallAction;
