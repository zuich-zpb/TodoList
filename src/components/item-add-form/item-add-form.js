import React, { Component } from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component{
state={
    label:"",
    contract: true,
    value:'',
}
    onLabelChange=(e)=>{
        this.setState({
            label:e.target.value,
            value:e.target.value
        })
    }
    handleLabelChange=(e)=>{
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = e.target.name;
        this.setState({
            [name]: value,
        })
    };
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.onItemAdded(this.state.label,);
        this.props.onItemAdded(this.state.value);
  
        this.setState({
            label:'',
            contract: false,
            value:'',
        })
    };
    render(){
        return(
            <form className="table"
                   onSubmit={this.onSubmit}>
                   <div className=' table row-cols-1'>
           <input 
           type="text"
           className="form-control"
           onChange={this.onLabelChange}
           placeholder="Name"
           value={this.state.label}
             />
             </div>

             <div className="table row-cols-2">
             <input
             name="contractor"
             type="checkbox"
             checked={this.state.contractor}
             onChange={this.onLabelChange}

             />
             <span>On Contract</span>
             </div>

             <div className="table row-cols-3">
             <input type="text"
             className="form-control"
             value={this.state.value}
            onChange={this.onLabelChange}
             />
             </div>

            <div className="table row-cols-4">
            <select value={this.state.value} onChange={this.onLabelChange}>
            <option></option>
              <option value="single">single</option>
              <option value="married">married</option>
            </select>
                </div>

                
              <div className="table row-cols-5">
           <button 
           className="btn btn-outline-secondary">
           ADD
           </button>
           </div>
            </form>
            
        )
    }
}