import React, { Component } from 'react';
import Nav from './nav';


class Delete_Contect extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:'vishal',
            name_add:[13322343,24534334,423453453]
        };
        this.Add_data = this.Add_data.bind(this);
    }
    Add_data(e)
    {   
        const newContect = this.newText.value
        this.setState({
            name_add: [...this.state.name_add, newContect]
        })
    }
    render() {
        return (
            <div>
                {this.state.name_add.map((number) => {
                    return(
                        <h3>{number}</h3>
                    )
                })}
                <input type="text" ref={(ip) => {this.newText = ip}} />
                <button onClick={this.Add_data}>submit</button>        
               
            </div>
        );
    }
}

export default Delete_Contect;
