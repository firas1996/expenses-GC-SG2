import "./ChartBar.css";

const ChartBar = ({ name }) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
      </div>
      <h5 className="chart-bar__label">{name}</h5>
    </div>
  );
};

export default ChartBar;
