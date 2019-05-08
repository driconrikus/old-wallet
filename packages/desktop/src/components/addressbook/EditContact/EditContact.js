import { connect } from 'react-redux';
import { ContactForm } from '@emeraldwallet/ui';

const EditContact = connect(
  (state, ownProps) => ({
    blockAddress: true,
    title: 'Edit Contact',
    initialValues: {
      name: ownProps.address.get('name'),
      address: ownProps.address.get('address'),
      description: ownProps.address.get('description'),
    },
  }),
  (dispatch, ownProps) => ({
    onSubmit: (data) => {
      ownProps.submit(data);
    },
    cancel: () => {
      ownProps.onCancel();
    },
  })
)(ContactForm);

export default EditContact;
