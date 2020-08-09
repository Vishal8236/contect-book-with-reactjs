import React, { Component } from 'react';
import data from './data.js';
import data1 from './all.json';
import './css.css'

class Show_Contect extends Component {
    constructor(props) {
        super();
        //this.state = {name:"vishal",number:"9630278503"}
    }

    render() {
        return (
            <div className="table-m">
                <table class="table table-light ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {data1.map((e_data, index) => {
                                return(
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{e_data.id}</td>
                                        <td>{e_data.name}</td>
                                    </tr>
                                    )}
                                )
                            }
                    </tbody>
                </table>
            </div >
            
        )
    }
}

export default Show_Contect;