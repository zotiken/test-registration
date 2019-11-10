import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});
console.log(document.querySelector('.form').querySelector('.data__input--email').value);
(function () {
	const password = document.querySelector('.password');
	const confirmPassword = document.querySelector('.confirm-password');
	const address = document.querySelector('.form').querySelector('.data__input--email');
	address.addEventListener('input', function () {
		const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		const addres = document.querySelector('.form').querySelector('.data__input--email').value;
		if (reg.test(addres)) {
			document.querySelector('.data__label--email').classList.add('checked');
			// alert('Введите корректный e-mail');
			// // return false;
		}
	});
	confirmPassword.addEventListener('input', function () {

		if ((password.value) !== (confirmPassword.value)) {
			password.setCustomValidity('Пароли не совпадают!');
		}else {
			password.setCustomValidity('');
		}
	});
})();
