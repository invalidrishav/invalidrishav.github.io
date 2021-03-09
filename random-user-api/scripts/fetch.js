import key from '../key.js';
console.log(key);

const userName = document.querySelector('#name');
const userAge = document.querySelector('#age');
const userGender = document.querySelector('#gender');
const userEmail = document.querySelector('#email');
const userPhone = document.querySelector('#phone');
const btn = document.querySelector('button');
window.onload = () => {
    fetch(key)
        .then((res) => {
            return res.json();
        })
        .then(userInfo)
        .catch((e) => console.log(e));
};
function userInfo(data) {
    console.log(data);
    // User's name
    const name = data.results[0].name;
    userName.textContent = `Name: ${name.title} ${name.first} ${name.last}`;
    // user's age
    const age = data.results[0].dob.age;
    userAge.textContent = `Age: ${age} (${age >= 60 ? 'Senior' : 'Adult'})`;
    // User's gender
    const gender = data.results[0].gender;
    userGender.textContent = `Gender: ${gender}`;
    // User's email
    const email = data.results[0].email;
    userEmail.textContent = `Email: ${email}`;
    // User's phone
    const phone = data.results[0].phone;
    userPhone.textContent = `Phone no: ${phone}`;
}
btn.ondblclick = () => {
    location.reload();
};
