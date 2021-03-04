import React, {PureComponent} from 'react';

import './ViewAction.css';
import {FcBusinessman, FcMultipleSmartphones} from "react-icons/fc";
import {GrMail} from "react-icons/gr";

class viewAction extends PureComponent {
    constructor(props) {
        super(props);
        this.props.isUpdate === '' ?
            this.state = {
                name: '',
                lastName: '',
                email: '',
                phone: ''
            } :
            this.state = {
                name: this.props.user.name,
                lastName: this.props.user.lastName,
                email: this.props.user.email,
                phone: this.props.user.phone
            };
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.userCreate(this.state);
    }

    render() {
        let buttonMessage = null;
        this.props.isUpdate === '' ? buttonMessage = "Creer Utilisateur" : buttonMessage = "Update Utilisateur";

        return (
            <div className="namr-user-card-to-action">
                <div className="namr-user-card-content">
                    <div className="user-card-img">
                        <FcBusinessman size="10em"/>
                    </div>
                    <div className="namr-user-info">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="firstname"> Firstname</label>
                                <input type="text" name="name" onChange={this.handleChange}
                                       defaultValue={this.state.name}/>
                            </div>
                            <div>
                                <label htmlFor="lastname"> Lastname</label>
                                <input type="text" name="lastName" onChange={this.handleChange}
                                       defaultValue={this.state.lastName}/>
                            </div>
                            <div>
                                <label htmlFor="mail"><span> <GrMail size="2em"/> </span> Mail </label>
                                <input type="mail" name="email" onChange={this.handleChange}
                                       defaultValue={this.state.email}/>
                            </div>
                            <div>
                                <label htmlFor="contact"> <span> <FcMultipleSmartphones
                                    size="2em"/></span> Contact</label>
                                <input type="text" name="phone" onChange={this.handleChange}
                                       defaultValue={this.state.phone}/>
                            </div>

                            <div className="namr-action">
                                <button type="submit" className="button-update"
                                        onClick={this.props.clicked}>{buttonMessage}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );

    }
};

export default viewAction;
