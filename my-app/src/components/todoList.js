import React, { useReducer, useState } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function TodoForm() {
  const classes = useStyles();

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          onChange={handleChanges}
          value={newTodo}
          label="Add To Do..."
          name="newTodo"
          id="filled-basic"
          variant="filled"
          type="text"
        />
        <br />
        <Button
          color="primary"
          onClick={() => {
            dispatch({ type: "ADD_TODO", payload: newTodo });
          }}
        >
          Add
        </Button>
      </form>
      <div>
        {state.todos.map(todo => (
          <li key={todo.id} onClick={() => dispatch({ type: "TOGGLE" })}>
            {todo.completed ? todo.item : <strike>{todo.item}</strike>}
          </li>
        ))}
      </div>
    </div>
  );
}
