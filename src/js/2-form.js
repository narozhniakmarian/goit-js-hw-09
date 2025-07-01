

const formData = {
    email: "",
    message: ""
};
function localStorageInput() {
    const form = document.querySelector('.feedback-form');
    if (!form) return;

    const emialInput = form.elements.email;
    const texareaInput = form.elements.message;
    const localStorageKey = "feedback-form-state";
    const saveData = localStorage.getItem(localStorageKey);
    if (saveData) {
        const dataParse = JSON.parse(saveData);
        formData.email = dataParse.email || "";
        formData.message = dataParse.message || "";
        emialInput.value = formData.email;
        texareaInput.value = formData.message;
    }

    form.addEventListener('input', (event) => {
        console.log('Input event:', event.target.name, event.target.value);

        formData[event.target.name] = event.target.value;
        localStorage.setItem(localStorageKey, JSON.stringify(formData));
    });


    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (formData.email.trim() === "" || formData.message.trim() === "") {
            alert("Fill please all fields");
            return;
        }

        console.log("Form submitted with data:", formData);
        localStorage.removeItem(localStorageKey);
        form.reset();

    });

} localStorageInput();