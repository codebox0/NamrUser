import React, {PureComponent} from 'react';

import './ViewItem.css';
import {AiOutlineDelete, AiOutlineUserSwitch} from "react-icons/ai";
import {FcBusinessman, FcMultipleSmartphones} from "react-icons/fc";
import {GrMail} from "react-icons/gr";

class ViewItem extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[ViewAction.js] rendering...');
    }

    render() {
        let cardView = null;
        cardView = <div className="welcome-message">
            Veuillez Choisir un utilisateur pour voir la fiche detaillée  <br/>
            Dans le cas contraire vous pouver créer un nouvel utilisateur

        </div>;

        if (this.props.user !== '' ) {
            cardView =
                <div className="namr-user-card">
                    <div className="namr-user-info">
                        <p> {this.props.user.name} {this.props.user.lastName}</p>
                        {/*<p>  </p>*/}
                        <span> <GrMail size="3em"/><span> {this.props.user.email} </span></span>
                        <span> <FcMultipleSmartphones size="3em"/> <span>{this.props.user.phone} </span> </span>
                    </div>
                    <div className="user-card-img">
                        <FcBusinessman size="10em"/>

                        <div className="namr-img-icon">
                            <button className="button-update" onClick={this.props.toUpdate}><AiOutlineUserSwitch onClick={this.props.clik} size="2em"/></button>
                            <button className="button-update" onClick={this.props.isDelete}><AiOutlineDelete onClick={this.props.clik} size="2em"/></button>
                        </div>
                         </div>
                </div> ;
        }

        return (
            cardView
        );
    }
}

export default ViewItem;
