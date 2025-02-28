import "./ChartBar.css";

const ChartBar = ({ name, value, max, total }) => {
  const progress = (value / max) * 100 + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: progress }}></div>
      </div>
      <h5 className="chart-bar__label">{name}</h5>
    </div>
  );
};

export default ChartBar;
