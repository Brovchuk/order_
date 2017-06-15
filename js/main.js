(function($){
	let container = $('.container'),
		navigation = $('.navigation'),
		contacts = $('.contacts'),
		menu = $('.menu'),
		back = $('.back'),
		mainLi = $('.container_list-li'),
		buttonMenu = $('.navigation-first'),
		buttonContacts = $('.navigation-second'),
		menuItem = $('.menu-item'),
		input = $('.container-input'),
		backNav = $('.back--navigation'),
		backMenu = $('.back--menu'),
		backContacts = $('.back--contacts'),
		menuItem1 = $('.menu-item1'),
		menuItem2 = $('.menu-item2'),
		menuItem3 = $('.menu-item3'),
		menuItem4 = $('.menu-item4'),
		mainList = $('.container_block');

	input.keyup(function() {
		let input = $('.container-input'),
			value = input.val(),
			mainList = $('.container_block');
		if (value.trim().length) {
			mainList.css({"opacity": "1"});
		} else {
			mainList.css({"opacity": "0"})
		}
	});

	mainLi.on('click', function() {
		container.fadeOut(1000);
		navigation.fadeIn(1000);
	})
	buttonMenu.on('click', function() {
		navigation.fadeOut(1000);
		menu.fadeIn(1000);
	})
	buttonContacts.on('click', function() {
		navigation.fadeOut(1000);
		contacts.fadeIn(1000);	
	})
	backNav.on('click', function() {
		navigation.fadeOut(1000);
		container.fadeIn(1000);
	})
	backMenu.on('click', function() {
		menu.fadeOut(1000);
		navigation.fadeIn(1000);
	})
	backContacts.on('click', function() {
		contacts.fadeOut(1000);
		navigation.fadeIn(1000);
	})
	menuItem1.on('click', function() {
		menuItem1.toggleClass('menu-item1, menu-item-active');
	})
	menuItem2.on('click', function() {
		menuItem2.toggleClass('menu-item2, menu-item-active');
	})
	menuItem3.on('click', function() {
		menuItem3.toggleClass('menu-item3, menu-item-active');
	})
	menuItem4.on('click', function() {
		menuItem4.toggleClass('menu-item4, menu-item-active');
	})


}(jQuery));