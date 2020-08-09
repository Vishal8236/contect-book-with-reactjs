import React, { Component } from 'react';
import Nav from './nav';
import './css.css'
import Show_Contect from './show_contect';

class Add_New_Contect extends Component {
    constructor()
    {
        super()
        this.state={
            contect:{
                name: ['a'],
                phone: [12],
            }      
        };
        this.add_data = this.add_data.bind(this);
    }
    add_data(event)
    {
        const name1 = this.name.value;
        const phone1 = this.phone.value;
        this.setState({
            name : [...this.state.contect.name , name1],
            phone : [...this.state.contect.phone, phone1],
        })
    }
    render(){
        return (
            <div>
                    {this.state.contect.map((data) => 
                        {
                        return(
                            <h3>{data}</h3>
                        )
                    })}
                <div className="card card-m">
                    <div className="card-p"> 
                        <div class="form-group">
                            <label for="exampleInputEmail1">your name</label>
                            <input ref={(ip) => {this.name = ip}} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your number with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">your phone number</label>
                            <input ref={(ip) => {this.phone = ip}} type="text" class="form-control" id="exampleInputPassword1" placeholder="number" />
                        </div>
                    
                        <button class="btn btn-primary" onClick={this.add_data}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add_New_Contect;
//    <Show_Contect data_n={this.state.name} data_p={this.state.phone}/>            
