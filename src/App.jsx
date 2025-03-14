import { useState } from "react";
import AddNewExpense from "./components/AddNewExpense";
import Container from "./components/Container";

function App() {
  const expensesData = [
    {
      id: 1,
      title: "Voyage",
      price: 350,
      date: new Date("2025-02-14"),
    },
    {
      id: 2,
      title: "Shopping",
      price: 150,
      date: new Date("2024-10-18"),
    },
    {
      id: 3,
      title: "Car",
      price: 100,
      date: new Date("2025-05-14"),
    },
    {
      id: 4,
      title: "Education",
      price: 300,
      date: new Date("2023-10-14"),
    },
  ];
  const [allExpenses, setAllExpenses] = useState(expensesData);
  const getData = (data) => {
    setAllExpenses([data, ...allExpenses]);
  };
  return (
    <>
      <AddNewExpense getData={getData} />
      <Container data={allExpenses} />
    </>
  );
}

export default App;
