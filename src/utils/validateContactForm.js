export const validateContactForm = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length < 2) {
        errors.name = 'Must be at least 2 characters.';
    } else if (values.name.length > 25) {
        errors.firstName = 'Must be 25 characters or less';
    }

    if (!values.message) {
        errors.message = 'Required';
    } else if (values.message.length < 10) {
        errors.message = 'Must be at least 10 characters.';
    } else if (values.message.length > 500) {
        errors.message = 'Must be 500 characters or less';
    }

    const reg = /^\d+$/;
    if (!reg.test(values.phone)) {
        errors.phone = 'The phone number should contain only numbers.';
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
};