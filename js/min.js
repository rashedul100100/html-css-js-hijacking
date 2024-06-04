const genaret = document.getElementById('genaret');
genaret.addEventListener('click', function () {
    const pBox = document.getElementById('pBox');
    let charecter = '1234567890';
    let pass = '';
    for (let i = 4; i < charecter.length; i++) {
        pass += charecter[Math.floor(Math.random() * charecter.length)];
    }
    pBox.value = pass;
})
const btn = document.getElementById('btn');
const lpassword = document.getElementById('l-password');
const machPass = document.getElementById('mach-pass');
const successActive = document.getElementById('success-active');
const bankArea = document.getElementById('bank-area');
function pass(number) {
    lpassword.value += number;
}
machPass.addEventListener('click', function () {
    if (pBox.value == lpassword.value) {
        successActive.classList.remove("success-active");
        bankArea.classList.add("bank-deactive");
    }
    else {
        bankArea.style.backgroundColor = 'red';
    }

})