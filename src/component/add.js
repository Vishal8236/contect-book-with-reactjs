import React, { Component } from 'react';
import Nav from './nav';
import Show1 from './show';

class Add extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            name_add:['vishal','ram','abc'],
            phone_add:[1111111,222222,333333],
            add: 'home',
            delete : this.delete.bind(this)
        };
        this.Add_data = this.Add_data.bind(this);
    }
    Add_data(e)
    {   
        const newName = this.newName.value
        const newPhone = this.newPhone.value
        this.setState({
            name_add: [...this.state.name_add, newName],
            phone_add: [...this.state.phone_add, newPhone],
        });
        this.newName.value = '';
        this.newPhone.value = ' ';
    }
    delete(indexn)
    {
        const allname = this.state.name_add;
        const allphone = this.state.phone_add;
        var index1 = allname.splice(indexn,1); //show component pass index and splice method delete 1 element from array
        console.log(index1);
        delete allname[index1];

        var index2 = allphone.splice(indexn,1);
        console.log(index2);
        delete allphone[index2];
        this.setState({
            name_add: allname,
            phone_add: allphone,
        });
    }
    render() {
        let add = this.state.add
        return (
            <div>   
                <div className="container">
                   <hr/>   
                    <div className="row">
                        <div className="col-4">
                            <button className="btn btn-primary" onClick={() => this.setState({add: "home"})}>Home</button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-info" onClick={() => this.setState({add: "add"})}>Add new contect</button>
                        </div>
                        <div className="col-4">
                             <button className="btn btn-primary" onClick={() => this.setState({add: "show"})}>Show contect</button>
                        </div>
                    </div>
                    <hr/>
                </div>
                { add === "home" &&
                    <React.Fragment>
                        <h1>welcome in patidar contect book</h1>
                    </React.Fragment>
                }
                { add === "add" && 
                    <React.Fragment>
                        <div className="card card-m">
                            <div className="card-p">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input class="form-control" type="text" ref={(ip) => {this.newName = ip}} /> 
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Phone number</label>
                                    <input class="form-control" type="text" ref={(ip) => {this.newPhone = ip}} />
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>    
                                <button class="btn btn-primary" onClick={this.Add_data}>submit</button>
                            </div>
                        </div>
                       
                    </React.Fragment>
                }
                
                { add === "show" && <Show data={this.state} /> }
            </div>
        );
    }
}
class Show extends Component {
    render(props) {
        return (
            <div>
                <Show1 data={this.props.data} /> 
            </div>
        );
    }
}
export default Add;
