import { useState } from "react";
import Todo from "./components/Todo";
import TypeTodo from "./components/TypeTodo";

const info = [];
function App() {
  // eslint-disable-next-line no-unused-vars
  const [todoList, setTodoList] = useState(info);
  console.log(todoList);
  const [edit, setEdit] = useState({ isEdit: false, ID: "", title: "" });
  return (
    <>
      <div className="bg-red-500">
        <div className="px-[8rem] py-5 grid grid-cols-1 lg:grid-cols-2 gap-10 h-[100vh] ">
          {!edit ? (
            <TypeTodo setTodoList={setTodoList} todoList={todoList} />
          ) : (
            <TypeTodo
              edit={edit}
              setEdit={setEdit}
              setTodoList={setTodoList}
              todoList={todoList}
            />
          )}
          <div className="space-y-3">
            {todoList.map((item, index) => (
              <Todo
                setTodoList={setTodoList}
                todoList={todoList}
                setEdit={setEdit}
                title={item.title}
                text={item.text}
                key={index}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
