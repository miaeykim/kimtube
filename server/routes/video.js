const express = require('express');
const router = express.Router();
//const { Video } = require("../models/Video");

const { auth } = require("../middleware/auth");
const multer = require("multer");

//Storage multer config
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.mp4') {
            return cb(res.status(400).end('only mp4 file is allowed.'), false);
        }
        cb(null, true)
    }
});

const upload = multer({ storage: storage }).single("file");

//=================================
//             Video
//=================================

router.post("/uploadfiles", auth, (req, res) => {
    //Save video to server
    upload(req, res, err => {
        if(err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename })
    })
})

module.exports = router;
