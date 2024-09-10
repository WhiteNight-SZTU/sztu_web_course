function showPasswordLogin() {
    document.getElementById('password-login-form').style.display = 'block';
    document.getElementById('sms-login-form').style.display = 'none';
}

function showSmsLogin() {
    document.getElementById('password-login-form').style.display = 'none';
    document.getElementById('sms-login-form').style.display = 'block';
}

function sendSmsCode() {
    alert('验证码已发送');
}

document.addEventListener('DOMContentLoaded', () => {
    showPasswordLogin();
});