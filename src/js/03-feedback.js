import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const FORM_KEY = 'userData';
formEl.addEventListener('input', throttle(handleInput, 500));
formEl.addEventListener('submit', handleSubmit);

function handleInput(event) {
    //    const savedDate = localStorage.getItem(FORM_KEY) ? JSON.parse(localStorage.getItem(FORM_KEY)) : {};
    let savedDate = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {}; // оператор нульового злиття

    const { name, value } = event.target;

    savedDate = {
        ...savedDate,
        [name]: value,
    };

    localStorage.setItem(FORM_KEY, JSON.stringify(savedDate));
}

const renderData = () => {
    let dataToRender = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {}; // оператор нульового злиття

    const inputNames = Object.keys(dataToRender);

    inputNames.forEach(inputName => {
        let input = formEl.elements[inputName];
        let valueKey = 'value';
        input[valueKey] = dataToRender[inputName];
    });
};
renderData();

function handleSubmit(event) {
    event.preventDefault();

    let finalData = {};
    const formData = new FormData(formEl);
    for (const [name, value] of formData.entries()) {

        finalData[name] = value;
    }

    localStorage.removeItem(FORM_KEY);
    console.log(finalData);
    formEl.reset();
}
