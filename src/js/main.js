$(function () {

	menu.init({
		$menuButton: $('.menu-button'),
		$menu: $('.navigation'),
		$header: $('.header')
	});

	scrollAddClass.init();
			
	scrollToPage.init({
		$scroll: $('.scroll-to-page')
	});

	form.init({
		$input: $('.contact').find('input'),
		$textarea: $('.contact').find('textara'),
		$inputs: $('.contact input, .contact textarea'),
		$form: $('.contact').find('form')
	});

});