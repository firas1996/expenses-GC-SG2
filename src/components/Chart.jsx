import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = () => {
  const chartData = [
    { name: "Jan", value: 0 },
    { name: "Feb", value: 0 },
    { name: "Mar", value: 0 },
    { name: "Apr", value: 0 },
    { name: "May", value: 0 },
    { name: "Jui", value: 0 },
    { name: "Jul", value: 0 },
    { name: "Aug", value: 0 },
    { name: "Sep", value: 0 },
    { name: "Oct", value: 0 },
    { name: "Nov", value: 0 },
    { name: "Dec", value: 0 },
  ];
  return (
    <div className="chart">
      {chartData.map((item) => {
        return <ChartBar key={item.name} name={item.name} value={item.value} />;
      })}
    </div>
  );
};

export default Chart;
