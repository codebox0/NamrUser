import React, {PureComponent} from 'react';

import './UserView.css';
import ViewItem from "./ViewItem/ViewItem";
import ViewAction from "./ViewItemAction/ViewAction";

class UserView extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[ViewAction.js] rendering...');
        this.state = {
            createUser: false,
            user: this.props.user
        }

        this.props.isUpdate !== "" ?
            this.state = {
                createUser: true,
                user: this.props.user
            } :
            this.state = {
                createUser: false,
                user: this.props.user
            };
    }

    componentDidMount() {
        console.log('[ViewAction.js]this.props.user...', this.props.user);
    }

    userCreateHandler = () => {

        console.log('this.state.createUser ', this.state.createUser);
        console.log('this.props.isCreateUser', this.props.isCreateUser);
        console.log('enter change user', this.state.user);
        this.setState((prevState, props) => {
            return {
                createUser: !prevState.createUser,
                user: ''
            };
        });
    };

    isUserCreateHandler = isCreateUser => {
        this.setState({
            createUser: isCreateUser
        });
        if (isCreateUser) {
            this.setState({
                user: ''
            });
        }
        this.props.resetUpdate();
    };


    render() {
        let registerButton = null;
        let createView = null;
        if (!this.props.isCreateUser) {
            registerButton =
                <button
                    className="button-action"
                    onClick={() => this.props.isCreateUserUpdate(true)}>
                    Créer Utilisateur
                </button>;
        } else {
            registerButton =
                <button
                    className="button-action"
                    onClick={() => this.props.isCreateUserUpdate(false)}>
                    Revenir à la fiche utilisateur
                </button>;
        }
        if (this.props.isCreateUser) {
            createView =
                <div className="namr-user">
                    <ViewAction
                        userCreate={this.props.userCreate}
                        user={this.props.user}
                        isUpdate={this.props.isUpdate}
                    />
                    {registerButton}
                </div>;
        } else {
            createView =
                <div className="namr-user">
                    <ViewItem
                        user={this.props.user}
                        clik={this.userCreateHandler}
                        isDelete={this.props.isDelete}
                        isUpdate={this.props.isUpdate}
                        toUpdate={this.props.toUpdate}
                    />
                    {registerButton}
                </div>;
        }


        return (
            createView
        );
    }

}

export default UserView;
