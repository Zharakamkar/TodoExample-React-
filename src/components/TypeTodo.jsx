/* eslint-disable react/prop-types */
import { useState } from "react";

const TypeTodo = ({ setTodoList, todoList, edit, setEdit }) => {
  // eslint-disable-next-line no-unused-vars
  const [newTodo, setNewTodo] = useState({
    id: 0,
    title: "",
    text: "",
    isEdit: false,
  });

  const editTodoList = () => {
    const EditList = todoList.map((item) => {
      if (+item.id === +edit.ID) {
        // item.title = newTodo.title;
        // item.text = newTodo.text;
        // item.id = edit.ID;
        // item.isEdit = false;
      }
      console.log(item);
    });
    // setTodoList(EditList);
    console.log(EditList);
  };

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-white text-3xl"> To do List</h1>

        <form action="" className="flex flex-col space-y-3">
          <input
            type="text"
            className="p-2"
            value={edit.isEdit === true ? newTodo.title : null}
            placeholder="type your title"
            onChange={(e) =>
              setNewTodo({ ...newTodo, title: e.target.value, id: Date.now() })
            }
          />
          <textarea
            className=" p-2"
            placeholder="start typing here..."
            name=""
            id=""
            value={edit.isEdit === true ? newTodo.text : null}
            cols="30"
            rows="10"
            onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 py-3 transition hover:bg-green-700 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              !edit.isEdit
                ? setTodoList([...todoList, newTodo])
                : editTodoList();

              // form.reset();
            }}
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default TypeTodo;
