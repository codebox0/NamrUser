import React, {PureComponent} from 'react';

import './LeftPannel.css';
import Users from "../../Users/Users";

class LeftPanel extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="namr-pannel-left">
                <span className="namr-list-title">Liste des utilisateurs</span>
                <div className="namr-list">
                    <Users
                        users={this.props.users}
                        isSelect={this.props.isSelected}
                        clicked={this.props.clicked}
                    />
                </div>
            </div>
        );
    }
}

export default LeftPanel;
