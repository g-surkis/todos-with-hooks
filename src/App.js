import './App.css';
import ListComponent from "./components/ListComponent"
import useLists from "./hooks/useLists"
import CreateItemComponent from "./components/CreateItemComponent"

function App() {
  const { data, loading, error, createListHandler } = useLists();

  if (loading) return <h1>Lists are loading ...</h1>
  if (error) return <div>Something went wrong</div>

  return (
    <div className="main">
      <CreateItemComponent onCreate={createListHandler} isList />
      <div className='lists'>
        {data.map((list) => <ListComponent list={list} />)}
      </div>
    </div>
  );
}

export default App;
