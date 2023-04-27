/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Todo = ({ title, text, id, setEdit, setTodoList, todoList }) => {
  const handelDelete = (id) => {
    const deleteList = todoList.filter((arr) => arr.id !== id);
    setTodoList(deleteList);
  };

  const handelEdit = (id) => {
    const findItem = todoList.find((item) => item.id === id);

    setEdit({
      isEdit: true,
      ID: id,
      title: findItem.title,
      text: findItem.text,
    });
  };

  return (
    <>
      <div>
        <div className="flex justify-between relative">
          <h3 className="bg-green-600 w-full relative font-bold p-2">
            {title}
          </h3>
          <button
            className="absolute right-5 font-bold text-red-600 text-lg"
            onClick={() => handelDelete(id)}
          >
            x
          </button>
          <button
            className="absolute right-10 font-bold text-blue-600 text-lg"
            onClick={() => handelEdit(id)}
          >
            Edit
          </button>
        </div>
        <p className="bg-white p-3">{text}</p>
      </div>
    </>
  );
};

export default Todo;
