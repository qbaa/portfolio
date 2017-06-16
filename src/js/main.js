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
		$textarea: $('.contact').find('textarea'),
		$inputs: $('.contact input, .contact textarea'),
		$form: $('.contact').find('form'),
		$back: $('.message--back')
	});

	footer.init({
		$items: $('.contact__item a'),
		$desc: $('.contact__desc')
	});	

	skills.init({
		$items: $('.skill'),
		$desc: $('.skill__desc')
	});

	animations.init();

});