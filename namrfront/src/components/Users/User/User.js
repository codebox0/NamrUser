import React, {PureComponent} from 'react';

import './User.css';
import {FaCaretRight} from "react-icons/fa";
import {FcBusinessman} from "react-icons/fc";


class User extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let caret = null;
        if (this.props.isSelected) caret = <FaCaretRight/>;
        return (
            <div className="namr-list-item" onClick={this.props.click}>
                {caret}
                <div className="user-info">
                    <FcBusinessman/>
                    <span> {this.props.lastName} </span>
                    <span> {this.props.name} </span>
                </div>
            </div>
        );
    }

}

export default User;
