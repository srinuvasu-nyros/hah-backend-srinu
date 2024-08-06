const multer = require('multer');
const fs = require('fs');
const {
  EventLiveChurchesAllowedMimeTypes,
  LibrariesAllowedMimeTypes
} = require("../utils/common/constants.js")

const storages = multer.diskStorage({
  destination: (req, file, cb) => {
    const dest_folder = req.url.split("/")[1];
    const path = `public/uploads/${dest_folder}`;
    fs.mkdirSync(path, { recursive: true });
    cb(null, path);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
  fileFilter:(req, file, cb) => {
    const event_attachments = ["events", "live-churches"];
    var array_of_allowed_file_types;
    if(event_attachments.includes(req.url)) {
      array_of_allowed_file_types = EventLiveChurchesAllowedMimeTypes;
    } else if ("libraries".includes(req.url)) {
      array_of_allowed_file_types = LibrariesAllowedMimeTypes;
    }
    if (!array_of_allowed_file_types.includes(image.mimetype)) {
        cb(null, false)
    } else {
      cb(null, false)
    }
  },
  fileSize:(req, file, cb) => {
    const allowed_file_size = 2;
    if ((image.size / (1024 * 1024)) > allowed_file_size) {
      cb(null, false)
    } else{
      cb(null, true)
    }
  },
});


const upload = multer({ storage: storages });

module.exports = upload;