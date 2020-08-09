import React, { Component } from 'react';
var phone = '';
var name = '';
class Show1 extends Component {
    render(props) {
        return (
            <div>
                <div className="container">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>phone</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.data.name_add.map((names, index) => {
                            return(
                                <tr>
                                    <td>{index}</td>
                                    <td>{names}</td>
                                    <td>{this.props.data.phone_add[index]}</td>
                                    <td><button onClick={() => this.props.data.delete(index)} className="btn btn-primary">Delete</button></td>                                   
                                </tr>         
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Show1;