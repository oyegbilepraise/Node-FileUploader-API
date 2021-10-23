const multer = require("multer");
const path = require("path"); 

// Multer configuration...
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "audio/mp3" || file.mimetype === "audio/mpeg" || file.mimetype === "video/mp4" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "application/pdf" || file.mimetype === "text/markdown" || file.mimetype==="text/plain" || file.mimetype==="application/msword") {
        cb(null, true);
      }
      else{
            cb(new Error("File type is not supported"), false);
            return;
      }
},
});
// let ext = path.extname(file.originalname);
//   if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".mp4" && ext !== ".mkv" && ext !== ".mp3" && ext !== ".mov" && ext !== ".avi") {
//   cb(new Error("File type is not supported"), false);
//   return;
// }
