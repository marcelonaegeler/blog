'use strict';

HTMLCollection.prototype.addEvent = function (e, f) {
	for (var i = 0, len = this.length; i < len; i++) {
		var element = this[i];

		(function (el) {
			if (!el['on' + e]) {
				el['on' + e] = function (event) {
					return f.call([event, el]);
				};
			}
		})(element);
	}
};

var app = (function () {

	var history = window.history,
	    navLinks,
	    stateObject = { page: '' };

	var changePage = function changePage(url) {

		window.sideNav.action('hide'); // Hide sideNav
		template.setTemplate('loading');

		ajax.request({
			url: url,
			method: 'GET',
			success: function success(response) {
				response = JSON.parse(response);

				template.setTemplate('post', response.posts);

				updateNavigationLinks();
			},
			error: function error() {
				template.setTemplate('notFound');
			}
		});
	};

	var updateNavigationLinks = function updateNavigationLinks() {

		navLinks = document.getElementsByClassName('navigation');

		navLinks.addEvent('click', function () {
			var event = this[0];
			event.preventDefault();

			var self = this[1];

			history.pushState({ page: self.href }, '');
			changePage(self.href);
		});
	};

	window.onpopstate = function (event) {
		changePage(event.state.page);
	};

	history.pushState({}, '');

	updateNavigationLinks();

	return {
		changePage: changePage
	};
})();
