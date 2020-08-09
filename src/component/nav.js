import React from 'react';
import './css.css';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Show_Contect from './show_contect';
import Add_New_Contect from './add_new_contect';
import Delete_Contect from './delete_contect';

class Nav extends React.Component
{
    render()
    {
        return(
            <div>
                <Router>
                    <div className="justify-content-center">
                    <ul class="nav justify-content-center">
                            <li class="nav-item ">
                                <Link className="nav-link h-active h3 bottom-border" to="">Show All Contect</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link h3 bottom-border" to="/add_new_contect">Add New Contect</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link h3 bottom-border" to="/delete_contect">Delete Contect</Link>
                            </li>
                        </ul>
                    </div>
                    <Switch>
                        <div>
                            <Route exact path="/" component={Show_Contect} />
                            <Route path="/add_new_contect" component={Add_New_Contect} />
                            <Route path="/delete_contect" component={Delete_Contect} />
                        </div>
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default Nav;