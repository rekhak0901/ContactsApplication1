import React, { Component, PropTypes } from 'react';
import { deleteItem, editItem } from '../redux/actions';

export default class ContactItem extends Component {


    renderPhone1 = () => {
        const { contact : { phone1, phoneType1 } } = this.props;
        return (
            <div>
            <strong title="Phone1">Phone:</strong> {phone1}
            &nbsp;&nbsp;
            <strong title="PhoneType1">Type:</strong> {phoneType1}<br/>
            </div>
        )
    }

    renderPhone2 = () => {
        const { contact : { phone2, phoneType2 } } = this.props;
        return (
            <div>
            <strong title="Phone2">Phone:</strong> {phone2}
            &nbsp;&nbsp;
            <strong title="PhoneType2">Type:</strong> {phoneType2}<br/>
            </div>
        )
    }

    renderPhone3 = () => {
        const { contact : { phone3, phoneType3 } } = this.props;
        return (
            <div>
            <strong title="Phone3">Phone:</strong> {phone3}
            &nbsp;&nbsp;
            <strong title="PhoneType3">Type:</strong> {phoneType3}<br/>
            </div>
        )
    }

    render() {
      const {
          id,
          onEditClick,
          onDeleteClick,
          contact : {
            name,
            email,
            address,
            phone1,
            phoneType1,
            phone2,
            phoneType2,
            phone3,
            phoneType3,
            _id,
          }
        } = this.props;

      return (
         <a href="#" className="list-group-item">
            <div className="pull-right">
                <span className="glyphicon glyphicon-pencil" onClick={onEditClick(id)}></span>
                 &nbsp;&nbsp;
                <span className="glyphicon glyphicon-remove" onClick={onDeleteClick(_id)}></span>
            </div>
            <address>
                <h3>{name}</h3><br/>
                {phone1 && this.renderPhone1()}
                {phone2 && this.renderPhone2()}
                {phone3 && this.renderPhone3()}
                <strong title="Email">Email:</strong> {email}<br/>
                <strong title="Address">Address:</strong> {address}<br/>
            </address>
        </a>
    );
    }
}
