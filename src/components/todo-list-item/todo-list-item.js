import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component{
    constructor(){
        super();  
    }
    render(){
        const{ label,value, contract, onDeleted}= this.props;
        let classNames="table";
    return (
    <span className={classNames}>
    
    <span className="table row-cols-1">
    {label}
     </span>

    <span className="table row-cols-2">
    {value}
     </span>

     <span className="table row-cols-3">
    {contract}
     </span>

    <button type="button"
    className="btn btn-outline-danger"
    onClick={onDeleted}>
    DELETE
    <i className="fa fa-trash-o" />
    </button>
    </span>
    );
    };
}


