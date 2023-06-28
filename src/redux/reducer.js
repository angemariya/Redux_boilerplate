const initialCounterState = {
    counter: 0,
}

const initialTodoState = {
  todos: [
    { text: 'clean room', id: 1, completed: false },
    { text: 'go to mall', id: 2, completed: true },
  ],
}

export const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case "INCREASE":
            return {
                ...state,
                counter: state.counter + 1,
            }
        case "DECREASE": {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case "CHANGE": {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        default:
        return state
    }
}

export const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case "REMOVE": {
            return {
                ...state,
                todos: state.todos.filter(el => el.id !== action.payload) 
            }
        }
        case "TOGGLE": {
            const overwritedTodos = state.todos.map((el) => {
                if (el.id === action.payload) {
                    return {
                        ...el,
                        completed: !el.completed,
                    };
                }
                return el;
            });

            return {
                ...state,
                todos: overwritedTodos,
            };
        }
        
        case "ADD": {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                    text: action.payload,
                    id: new Date().getTime,
                    checked: false,
                    }
                ]
    
            }
        }
        default:
            return state
    }
} 