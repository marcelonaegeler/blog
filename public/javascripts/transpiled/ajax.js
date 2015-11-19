'use strict';

var ajax = (function () {

	var encode = function encode(isGET, initialData) {
		var encoded = isGET ? '?' : '';

		for (var i in initialData) {
			encoded += i + '=' + initialData[i] + '&';
		}

		return encoded.substring(0, encoded.length - 1);
	};

	var request = function request(options) {
		var method = options.method,
		    data = options.data,
		    url = options.url;

		if (!method) {
			method = 'GET';
		}
		if (!data) {
			data = {};
		}

		method = method.toUpperCase();

		var isGET = method === 'GET';
		var data = encode(isGET, options.data);

		if (isGET) {
			url += data;
		}

		var xhr = new XMLHttpRequest();

		if (options.success || options.error) {
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {

					if (xhr.status === 200 && options.success) {
						options.success(xhr.response);
					} else if (xhr.status !== 200 && options.error) {
						options.error(xhr.response);
					}
				}
			};
		}

		xhr.open(method, url, true);
		xhr.setRequestHeader('X-Request-With', 'XMLHttpRequest');

		xhr.send(isGET ? null : data);
	};

	return {
		request: request
	};
})();
