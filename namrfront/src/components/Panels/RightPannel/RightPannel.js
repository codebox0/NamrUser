import React, {PureComponent} from 'react';
import UserView from "../../Users/UserView/UserView";

class RightPanel extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <UserView
                user={this.props.user}
                isDelete={() => this.props.isDelete(this.props.user.id)}
                isUpdate={this.props.isUpdate}
                toUpdate={() => this.props.toUpdate(this.props.user.id)}
                userCreate={this.props.userCreate}
                resetUpdate={this.props.resetUpdate}
                isCreateUserUpdate={this.props.isCreateUserUpdate}
                isCreateUser={this.props.isCreateUser}
            />
        );
    }

}

export default RightPanel;
