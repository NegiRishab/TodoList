import React, { useState } from "react";
import classes from "./FormList.module.css";
import Button from "./Util/Button";
import Card from "./Util/Card";

export default function FormList(props) {
  const [isupdate, setupdate] = useState(false);
  const [newTitle, setnewTitle] = useState("");

  const { id } = props;
  {
    console.log(id);
  }

  async function handleUpdate() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/1`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          title: newTitle,
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const data = response.json();
    console.log("updated", data);
    setupdate(false);
  }

  const handleinput = (event) => {
    setnewTitle(event.target.value);
  };
  async function handleDelte() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      }
      );
      console.log("Deleted")
      alert("hey you successfully deleted")
  }

  const handlechckupdate = () => {
    setupdate(true);
  };
  const handlecancelupdate = () => {
    setupdate(false);
  };
  const handleupdatesubmit = (e) => {
    e.preventDefault();
    setnewTitle("");
  };

  return (
    <>
      {isupdate ? (
        <div className="updatebuton input ">
          <form onSubmit={handleupdatesubmit}>
            <label htmlFor=" title">New Title</label>
            <input type="text" id="title" onChange={handleinput} />
            <button
              type="submit"
              style={{ marginRight: 10 }}
              onClick={handleUpdate}
              value={newTitle}
            >
              {" "}
              Update
            </button>
            <button onClick={handlecancelupdate}> Cancel</button>
          </form>
        </div>
      ) : (
        ""
      )}

      <Card className={classes.Tasks}>
        <ul>
          <li
            className={
              props.completed ? classes.completed : classes.notcompleted
            }
          >
            <Button handle={handlechckupdate}>Update</Button>
            {props.title}
            <Button handle={handleDelte}> Delete</Button>
          </li>
        </ul>
      </Card>
    </>
  );
}
