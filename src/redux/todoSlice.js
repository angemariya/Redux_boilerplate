import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { text: 'clean room', id: 1, completed: false },
    { text: 'go to mall', id: 2, completed: true },
  ],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        remove: (state, action) =>{
            return {
                ...state,
                todos: state.todos.filter(el => el.id !== action.payload) 
            }
        },
        toggle: (state, action) => {
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
        },
        add: (state, action) => {
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
    }
});

export const { add, toggle, remove } = todoSlice.actions;

export default todoSlice.reducer;