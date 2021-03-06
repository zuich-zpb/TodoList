import React from 'react';

import TodoListItem from '../todo-list-item'

import './todo-list.css';



const TodoList =({todos, onDeleted})=>{
    const elements=todos.map((item)=>{
       const {id,...itemProps}=item;
        return ( 
            <li key={id} >
            <TodoListItem 
            {...itemProps}
            onDeleted={()=>onDeleted(id)}/>
        </li>
        );
    });
    return(
        <ul className="table">
        {elements}
        </ul>

         );
};

export default TodoList;