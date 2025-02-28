import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ data }) => {
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
  data.forEach((el) => {
    return (chartData[el.date.getMonth()].value += el.price);
  });
  const values = chartData.map((el) => el.value);
  const max = Math.max(...values);
  const total = values.reduce((acc, num) => acc + num);
  console.log(total);
  return (
    <div className="chart">
      {chartData.map((item) => {
        return (
          <ChartBar
            key={item.name}
            name={item.name}
            value={item.value}
            max={max}
            total={total}
          />
        );
      })}
    </div>
  );
};

export default Chart;
