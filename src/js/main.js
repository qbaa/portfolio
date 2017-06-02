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

});