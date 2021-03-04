import React, {PureComponent} from 'react';

import './Pannel.css';
import LeftPanel from "./LeftPannel/LeftPannel";
import RightPanel from "./RightPannel/RightPannel";
import {userDelete, userList, userRegister, userUpdate} from "../../services/user-service";

class Pannel extends PureComponent {


    constructor(props) {
        super(props);

        this.state = {
            users: [],
            userSelect: '',
            activeUser: '',
            toUpdateUser: '',
            isCreateUser: false,
            otherState: 'some other value',
            showPersons: false,
            showCockpit: true,
            changeCounter: 0,
            error: false,
            isLoaded: false,
            authenticated: false
        };

    }

    componentDidMount() {
        this.userGetListHandler();
    }

    userGetListHandler = () => {
        userList()
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        isLoaded: true,
                        users: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                });
    };

    userCreateHandler = (user) => {

        this.state.toUpdateUser === '' ?
            userRegister(user)
                .then(value => {
                        this.userGetListHandler();
                        this.setState({
                            userSelect: '',
                            activeUser: '',
                            toUpdateUser: '',
                            isLoaded: true
                        })
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error: error
                        });
                    }) :

            userUpdate({id: this.state.toUpdateUser, user: user})
                .then(value => {
                        this.userGetListHandler();
                        this.setState({
                            userSelect: '',
                            activeUser: '',
                            toUpdateUser: '',
                            isLoaded: true
                        })
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error: error
                        });
                    });

    };

    userDeleteUserHandler = personIndex => {
        userDelete({id: personIndex})
            .then(value => {
                    this.userGetListHandler();
                    this.setState({
                        userSelect: '',
                        activeUser: ''
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                })
    };
    isCreateUserToogleHandler = isCreateUser => {
        this.setState({
            isCreateUser: isCreateUser
        })
    };

    userSelectHandler = userIndex => {
        this.setState({
            userSelect: userIndex,
            toUpdateUser: '',
            activeUser: this.state.users[userIndex]
        });

        this.isCreateUserToogleHandler(false);
    };

    resetUpdateHandler = () => {
        this.setState({
            toUpdateUser: ''
        });
    };

    userToUpdateHandler = userIndex => {
        this.setState({
            toUpdateUser: userIndex,
            isCreateUser: true
        });
    };

    render() {

        return (
            <div className="namr-content">
                <LeftPanel
                    users={this.state.users}
                    isSelected={this.state.userSelect}
                    clicked={this.userSelectHandler}
                    resetUpdate={this.resetUpdateHandler}
                />
                <RightPanel
                    user={this.state.activeUser}
                    isDelete={this.userDeleteUserHandler}
                    isUpdate={this.state.toUpdateUser}
                    toUpdate={this.userToUpdateHandler}
                    userCreate={this.userCreateHandler}
                    resetUpdate={this.resetUpdateHandler}
                    isCreateUserUpdate={this.isCreateUserToogleHandler}
                    isCreateUser={this.state.isCreateUser}
                />
            </div>
        );
    }
}

export default Pannel;
