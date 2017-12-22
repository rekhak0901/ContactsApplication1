import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactList from '../components/ContactList';
import AddContactModal from '../components/AddContactModal';
import EditContactModal from '../components/EditContactModal';
import { Modal } from 'react-bootstrap';
import { 
    fetchAllContacts,
    postContact,
    deleteContact,
    putContact
} from '../redux/actions'

export class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isAddContactModalVisible: false,
            isEditContactModalVisible: false,
            editContactIndex: undefined,
            contact : {}
        };
        this.props.fetchContacts()
    }
    
    /*
    * The isAddContactModalVisible is set to true only when the Add button (+) is clicked
    */
    openAddModal = () => {
        this.setState({isAddContactModalVisible: true})
    }

    /*
    * addContactModal and editContactModal disappear when cancel button is clicked
    */
    onCancelClick = () => {
        this.setState({
        isAddContactModalVisible: false, 
        isEditContactModalVisible: false})
    }

    /*
    * 1. find the contact being edited in the contacts collection with index
    * 2. show the editContactModal
    * 3. set the index to the state to be used by the editContact action to edit the right contact 
    * 4. set the contact being edited to the state to be used as default values for the edit contact modal
    */
    openEditContactModal = (index) => () => {
        const { contacts } = this.props;
        const contact = contacts[index];
        this.setState({
            isEditContactModalVisible:  true,
            contact,
            editContactIndex:index
        });
        
    }
    
    /*
    *get the right index from the state
    *passing into action creator
    */
    deleteItemAction = (id) => () => {
        this.props.deleteContact(id)
    }

    /*
    *get the right index from the state
    *clicking on edit with the index and the values from the input fields
    *passing into action creator
    *set isEditContactModalVisible to false
    */
    handleOnEditContact = id => {
        const {editContactIndex}=this.state;
        const name = $('#edit_contact_modal').find('#contact_name').val();
        const phone1 = $('#edit_contact_modal').find('#contact_number_1').val();
        const phoneType1 = $('#edit_contact_modal').find('#contact_type_1').val();
        const phone2 = $('#edit_contact_modal').find('#contact_number_2').val();
        const phoneType2 = $('#edit_contact_modal').find('#contact_type_2').val();
        const phone3 = $('#edit_contact_modal').find('#contact_number_3').val();
        const phoneType3 = $('#edit_contact_modal').find('#contact_type_3').val();
        
        const email = $('#edit_contact_modal').find('#contact_email').val();
        const address = $('#edit_contact_modal').find('#contact_address').val();
        this.props.putContact({id, name, phone1, phoneType1, phone2, phoneType2, phone3, phoneType3, email, address})
        this.setState({isEditContactModalVisible: false})
        
    }

    /*
    *clicking on add with the values from the input fields
    *passing into action creator
    *set isAddContactModalVisible to false
    */
    handleOnAddContact = () => {
        const name = $('#add_contact_modal').find('#contact_name').val();
        
        const phone1 = $('#add_contact_modal').find('#contact_number_1').val();
        const phoneType1 = $('#add_contact_modal').find('#contact_type_1').val();
        const phone2 = $('#add_contact_modal').find('#contact_number_2').val();
        const phoneType2 = $('#add_contact_modal').find('#contact_type_2').val();
        const phone3 = $('#add_contact_modal').find('#contact_number_3').val();
        const phoneType3 = $('#add_contact_modal').find('#contact_type_3').val();
        
        const email = $('#add_contact_modal').find('#contact_email').val();
        const address = $('#add_contact_modal').find('#contact_address').val();
        this.props.postContact({name, phone1, phoneType1, phone2, phoneType2, phone3, phoneType3, email, address})
        this.setState({isAddContactModalVisible: false})
    }

    render() {
        //const { contacts }= this.props;
        const { contacts }= this.props;
        const { isAddContactModalVisible, contact, isEditContactModalVisible } =  this.state;

        return (
    
        <div className="row">
            <div id="main-content" className="panel panel-info" >
                <div className="panel-heading">
                    <span className="panel-title">Contacts Manager</span>
                    <button className="btn btn-default btn-sm pull-right" 
                            onClick={this.openAddModal}>
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </div>
                <div className="panel-body">
                    <ContactList contacts={contacts}
                        openEditContactModal={this.openEditContactModal}
                        deleteItemAction={this.deleteItemAction}
                    />
                </div>
            </div>

            <AddContactModal 
                isVisible={isAddContactModalVisible}
                onCancel={this.onCancelClick}
                addContact={this.handleOnAddContact}
            />
            
            <EditContactModal
                isVisible={isEditContactModalVisible}
                onCancel={this.onCancelClick}
                editContact={this.handleOnEditContact} 
                contact={contact}  
            />          
        </div>
        );
    }
}

var mapStateToProps = state => state

var mapDispatchToProps = dispatch => ({
        fetchContacts: () => dispatch(fetchAllContacts()),
        postContact: contact => dispatch(postContact(contact)),
        deleteContact: id => dispatch(deleteContact(id)),
        putContact: id=> dispatch(putContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
