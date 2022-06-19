
import useTodoListComponentState from "../hooks/useListComponentState"
import CreateItemComponent from "./CreateItemComponent"
import TodoElement from "./TodoElement"


const ListComponent = ({ list }) => {
  const { data, loading, error, createTodoHandler, updateHandler, updateTitleHandler } =
    useTodoListComponentState({ list });

const titleRender = (value)=><h2 className="list-title">{value}</h2>

  if (loading) return <div className="list"><h5>List are loading ...</h5></div>

  if (data.isDeleted) {
    return <div className="list"> {titleRender(data.title)}<br/><br/>List deleted</div>
  }

  if (error) return <div className="list">Something went wrong</div>

  return (
    <div className="list">
      <TodoElement element={data.title}
        updateHandler={updateTitleHandler}
        render={
          (title) => {
            return titleRender(title)
          }} />

      <ul>
        {data.todos.map((element, i) => {
          return (<TodoElement key={element} element={element} index={i} updateHandler={updateHandler} />)
        })}
        <CreateItemComponent onCreate={createTodoHandler} />
      </ul>
    </div>
  );
};

export default ListComponent