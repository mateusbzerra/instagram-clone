const multer = require('multer');
const path = require('path');

module.exports = {
	storage: new multer.diskStorage({
		destination: path.resolve(__dirname, '..', '..', 'uploads'),
		filename: function(req, file, cb) {
			const filename = `${Date.now()}.jpg`;
			cb(null, filename);
		}
	})
};
