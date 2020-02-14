import React from 'react';

import TodoListItem from '../todo-list-item'
import './todo-list.css';


const TodoList =({todos, onDeleted})=>{
    const elements=todos.map((item)=>{
       const {id,...itemProps}=item;
        return ( 
            <div className="table">
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Contract</th>
                  <th>Position</th>
                </tr>
            <li key={id} >
            <TodoListItem 
            {...itemProps}
            onDeleted={()=>onDeleted(id)}/>
        </li>
        </tbody>
        </table>
      </div>
        );
    });
    return(
        <ul className="table">
        {elements}
        </ul>

         );
};

export default TodoList;