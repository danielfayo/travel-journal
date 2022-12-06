import Nav from "./components/Nav";
import Card from "./components/Card";
import element from "./data";

function App() {
  const data = element.map(item => {
    return <Card
      {...item}
    />
  })
  return (
    <>
    <Nav/>
    {data}
    </>
  );
}

export default App;
