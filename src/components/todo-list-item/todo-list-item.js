import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component{
    constructor(){
        super();  
    }
    render(){
        const{ label, onDeleted}= this.props;
        let classNames="table";
    return (
    <span className={classNames}>
    {label}
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


