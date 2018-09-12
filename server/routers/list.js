const router = require("express").Router();
const axios = require("axios");
const conf = require("../../config");
const iconv = require("iconv-lite");
const { handleError, handleSuccess } = require("../../helpers/resFormat");

router.get("/", function(req, res) {
	const keywords = req.query.keywords;
	if (!keywords) {
		handleError(res, "keywords is not defines");
	}

	axios({
		method: "GET",
		baseURL: conf.baseURL,
		url: conf.api,
		params: {
			[conf.page]: 1,
			[conf.keywords]: keywords
		},
		headers: {
			"accept-encoding": "gzip, deflate, br"
		},
		responseType: "arraybuffer"
	})
		.then(result => {
			const data = iconv.decode(result.data, conf.charset);
			handleSuccess(res, data);
		})
		.catch(error => {
			console.error(error);
			handleError(res, error);
		});
});

module.exports = router;
