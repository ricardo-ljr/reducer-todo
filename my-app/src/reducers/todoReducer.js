// Initial State Reducer

export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    },
    {
      item: "Get frustrated with reducers",
      completed: false,
      id: 12345
    }
  ]
};

// Todo Reducer

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case "TOGGLE":
      const toggle = state.todos.map(todo => {
        if (todo.id === action.id)
          return { ...todo, completed: !todo.completed };
        return toggle;
      });

    default:
      return state;
  }
};
