import React, {PureComponent} from 'react';

import User from './User/User';

class Users extends PureComponent {

    constructor(props) {
        super(props);
    }


    render() {
        return this.props.users.map((user, index) => {
            return (
                <User
                    click={() => this.props.clicked(index)}
                    name={user.name}
                    lastName={user.lastName}
                    isSelected={index === this.props.isSelect}
                    email={user.email}
                    phone={user.phone}
                    key={user.id}
                    changed={event => this.props.changed(event, user.id)}
                />
            );
        });
    }
}

export default Users;
