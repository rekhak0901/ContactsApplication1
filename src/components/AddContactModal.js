import React , { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { isEmpty, map, range } from 'lodash';

export default class AddContactModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: '',
        }
    }

    verifyEmailId = () => {
        const { email } = this.state;
        // Regex from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
        return !isEmpty(email) && !(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email))
    }
    
    verifyName = () => {
        const {name} = this.state;
        return isEmpty(name);
    }
    
    handleOnEmailChange = (event) => {
        this.setState({ email: event.target.value})
    }

    handleOnNameChange = (event) => {
        this.setState({ name: event.target.value})
    }

    /*
    * had the setState to empty again because of a bug where the second time you add a contact
    * there would have been data already in the state and it would allow you to add a contact
    * without a name
    */
    handleAddContact = () => {
        const { addContact } = this.props
        addContact()
        this.setState({
            email: '',
            name: '',
        })
    }

    handleCancelContact = () => {
        const { onCancel } = this.props
        onCancel()
        this.setState({
            email: '',
            name: '',
        })
    }


    render = () => {

        const { isVisible, onCancel } = this.props;
        const { rows } = this.state;
        return (
            
            <Modal id='add_contact_modal' show={isVisible}>
                <Modal.Header>
                    <Modal.Title>Add a new contact</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <FormGroup>
                            <ControlLabel>
                                Name:
                            </ControlLabel>
                            <FormControl
                                id='contact_name'
                                type='required'
                                placeholder="Enter name"
                                onChange={this.handleOnNameChange}
                            />
                            {this.verifyName() && <HelpBlock> Name cannot be blank </HelpBlock>}
                        </FormGroup>
                        
                        <FormGroup>
                            <ControlLabel>
                                Phone:
                            </ControlLabel>
                            <FormControl
                                id='contact_number_1'
                                type='number'
                                placeholder="Enter phone number"
                            />
                           <FormControl 
                                componentClass="select" 
                                placeholder='Phone Type'
                                id='contact_type_1'
                            >
                            <option value="home"> home </option>
                            <option value="work"> work </option>
                            <option value="mobile"> mobile </option>
                            </FormControl>
                            <FormControl
                                id='contact_number_2'
                                type='number'
                                placeholder="Enter phone number"
                            />
                           <FormControl 
                                componentClass="select" 
                                placeholder='Phone Type'
                                id='contact_type_2'>
                                <option value="work"> work </option>
                                <option value="home"> home </option>
                                <option value="mobile"> mobile </option>
                            </FormControl>
                            <FormControl
                                id='contact_number_3'
                                type='number'
                                placeholder="Enter phone number"
                            />
                            <FormControl 
                                componentClass="select" 
                                placeholder='Phone Type'
                                id='contact_type_3'>
                                <option value="mobile"> mobile </option>
                                <option value="work"> work </option>
                                <option value="home"> home </option>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>
                                Email id:
                            </ControlLabel>
                            <FormControl
                                id='contact_email'
                                type='text'
                                placeholder="Enter email id"
                                onChange={this.handleOnEmailChange}
                            />
                            {this.verifyEmailId() && <HelpBlock> your email is invalid </HelpBlock>}
                        </FormGroup>
                        
                        <FormGroup>
                            <ControlLabel>
                                Address:
                            </ControlLabel>
                            <FormControl
                                id='contact_address'
                                type='text'
                                placeholder="Enter address"
                            />
                       </FormGroup>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.handleCancelContact}>Cancel</Button>
                    <Button 
                        bsStyle="primary" 
                        onClick={this.handleAddContact} 
                        disabled = {this.verifyEmailId() || this.verifyName()}
                    > 
                    Add
                    </Button>
                </Modal.Footer>
            </Modal>
      );
    }
}
