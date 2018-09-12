module.exports.handleError = function(res, msg) {
	res.json({
		code: 500,
		data: {},
		msg: msg.toString()
	});
};

module.exports.handleSuccess = function(res, data) {
	res.json({
		code: 0,
		data: data,
		msg: "ok"
	});
};
