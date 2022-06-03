import { useCallback, useEffect, useState } from "react";
import Form from "./Form";
import FormList from "./FormList";
import Button from "./Util/Button";

function App() {
  const [Tasks, setTasks] = useState([]);
  const [isshow, setShow] = useState(false);



  const fetchApi = useCallback(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/todos?_limit=5"
    );
    const data = await response.json();
    setTasks(data);

    // console.log(Tasks);
  }, []);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);




   async function handleList (newTask) {

     const respose= await fetch("https://jsonplaceholder.typicode.com/users/1/todos", {
      method: "POST",
      body: JSON.stringify({
        newTask,
        completed:false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })

   const data= await respose.json();
      console.log(data);
      alert ("hey your Task is now Added ")
  };





  const handleShowLit = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };

  return (
    <div className="App">
      <Form onAdd={handleList} />

      {!isshow && (
        <button className="button" onClick={handleShowLit}>
          Show My Tasks
        </button>
      )}
      {isshow && (
        <button
          className="button "
          style={{ height: 100, marginTop: 40 }}
          onClick={handleHide}
        >
          Hide List
        </button>
      )}
      {isshow && Tasks.map((task) => <FormList title={task.title} completed={task.completed} key={task.id} id={task.id}/>)}
    </div>
  );
}

export default App;
