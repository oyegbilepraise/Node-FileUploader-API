const router = require("express").Router();
const cloudinary = require('./Cloudinary/cloud')
const upload = require('./Multers/multer')
require('dotenv').config();

router.get('/he', (req, res) =>   {
  res.json(process.env.ClOUD_NAME);
})

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const resi = await cloudinary.uploader.upload(req.file.path).then((result) => {
        const img = result
        res.status(200).json(img)
    });
  } catch (err) {
    console.log(err);
  }}); 

 module.exports = router; 