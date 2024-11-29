let info = JSON.parse(localStorage.getItem('userInfo')) || {
    username: '',
    email: '',
    password: '',
    confirmation: '',
    dateOfBirth: '',
    phone: '',
    gender: '',
    agreement: ''
};

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    processInfo();
});

function processInfo() {
    const username = document.querySelector('.username');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const passwordConfirmation = document.querySelector('.password-confirmation');
    const dateOfBirth = document.querySelector('.date-input');
    const phoneNumber = document.querySelector('.phone-number');
    const gender = document.querySelector('input[name="gender"]:checked'); // Get selected gender
    const agreement = document.querySelector('.agreement-checkbox');

    const userInfo = {
        username: username.value,
        email: email.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
        dateOfBirth: dateOfBirth.value,
        phone: phoneNumber.value,
        gender: gender ? gender.value : '', // Handle if no gender is selected
        agreement: agreement.checked // Use `checked` property to get true/false
    };

    if (password.value !== passwordConfirmation.value) {
        passwordConfirmation.classList.add('doesnot-match');
        document.querySelector('.password-indicator').classList.add('indicator');

        if (!agreement.checked) {
            document.querySelector('.agreement-indicator').classList.add('indicator');
        }
    } else {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        passwordConfirmation.classList.remove('doesnot-match');
        document.querySelector('.password-indicator').innerHTML = '';
        document.querySelector('.agreement-indicator').innerHTML = '';

        username.value = '';
        email.value = '';
        password.value = '';
        passwordConfirmation.value = '';
        dateOfBirth.value = '';
        phoneNumber.value = '';
        agreement.checked = false;

        document.querySelectorAll('.gender-input').forEach(gender => {
            gender.checked = false;
        });

        renderInfo();
    }
}

function renderInfo() {
    const savedInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(savedInfo);
}