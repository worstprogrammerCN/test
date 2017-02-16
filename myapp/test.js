var bcrypt = require('bcryptjs');
var MongoClient = require('mongodb').MongoClient
const saltRounds = 10;
var dbUrl = 'mongodb://localhost:27017/ma';
var debug = require('debug')('test');
var moment = require('moment');
MongoClient.connect(dbUrl).then((db) => {
  
})









// var http = require('http'),
//     inspect = require('util').inspect;
// var path = require('path'),
//     os = require('os'),
//     fs = require('fs');
 
// var Busboy = require('busboy');
 
// http.createServer(function(req, res) {
//   if (req.method === 'POST') {
//     var busboy = new Busboy({ headers: req.headers });
//     let postValue;
//     busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
//       console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
//       // if (!fs.existsSync(path))
//       let saveDir = path.join(__dirname, 'uploads', postValue);
//       if (!fs.existsSync(saveDir))
//         fs.mkdirSync(saveDir);
//       var saveTo = path.join(saveDir, filename);
//       file.pipe(fs.createWriteStream(saveTo, {flags : 'w+'}));
//       file.on('data', function(data) {
//         debug('data recieved', data);
//         console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
//       });
//       file.on('end', function() {
//         debug(fieldname);
//         debug(saveTo);
//         console.log('File [' + fieldname + '] Finished');
//       });
//     });
//     busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
//       console.log(val);
//       console.log('Field [' + fieldname + ']: value: ' + inspect(val));
//       postValue = val;
//     });
//     busboy.on('finish', function() {
//       console.log('Done parsing form!');
//       res.writeHead(303, { Connection: 'close', Location: '/' });
//       res.end();
//     });
//     req.pipe(busboy);
//   } else if (req.method === 'GET') {
//     res.writeHead(200, { Connection: 'close' });
//     res.end('<html><head></head><body>\
//                <form method="POST" enctype="multipart/form-data">\
//                 <input type="text" name="textfield"><br />\
//                 <input type="file" name="filefield" multiple><br />\
//                 <input type="submit">\
//               </form>\
//             </body></html>');
//   }
// }).listen(8000, function() {
//   console.log('Listening for requests');
// });
 
// // Example output, using http://nodejs.org/images/ryan-speaker.jpg as the file: 
// // 
// // Listening for requests 
// // File [filefield]: filename: ryan-speaker.jpg, encoding: binary 
// // File [filefield] got 11971 bytes 
// // Field [textfield]: value: 'testing! :-)' 
// // File [filefield] Finished 
// // Done parsing form! 


function foo1(){
  function foo2(){
    console.log('a');
  }
}

console.log(foo2);

function encryptPassword(plainPassword){ // return a promise with hashed password
  return bcrypt.hash(plainPassword, saltRounds);
}

function comparePassword(plainPassword, hashedPassword){ // return a promise with compared result(true or false)
  return bcrypt.compare(plainPassword, hashedPassword);
}


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- jQuery
    ====================================================================== -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

    <!-- Fine Uploader Gallery CSS file
    ====================================================================== -->
    <link href="fine-uploader-new.css" rel="stylesheet">

    <!-- Fine Uploader jQuery JS file
    ====================================================================== -->
    <script src="jquery.fine-uploader.js"></script>

    <!-- Fine Uploader Gallery template
    ====================================================================== -->
    <script type="text/template" id="qq-template-gallery">
        <div class="qq-uploader-selector qq-uploader qq-gallery" qq-drop-area-text="Drop files here">
            <div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container">
                <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar"></div>
            </div>
            <div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone>
                <span class="qq-upload-drop-area-text-selector"></span>
            </div>
            <div class="qq-upload-button-selector qq-upload-button">
                <div>Upload a file</div>
            </div>
            <span class="qq-drop-processing-selector qq-drop-processing">
                <span>Processing dropped files...</span>
                <span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner"></span>
            </span>
            <ul class="qq-upload-list-selector qq-upload-list" role="region" aria-live="polite" aria-relevant="additions removals">
                <li>
                    <span role="status" class="qq-upload-status-text-selector qq-upload-status-text"></span>
                    <div class="qq-progress-bar-container-selector qq-progress-bar-container">
                        <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-progress-bar-selector qq-progress-bar"></div>
                    </div>
                    <span class="qq-upload-spinner-selector qq-upload-spinner"></span>
                    <div class="qq-thumbnail-wrapper">
                        <img class="qq-thumbnail-selector" qq-max-size="120" qq-server-scale>
                    </div>
                    <button type="button" class="qq-upload-cancel-selector qq-upload-cancel">X</button>
                    <button type="button" class="qq-upload-retry-selector qq-upload-retry">
                        <span class="qq-btn qq-retry-icon" aria-label="Retry"></span>
                        Retry
                    </button>

                    <div class="qq-file-info">
                        <div class="qq-file-name">
                            <span class="qq-upload-file-selector qq-upload-file"></span>
                            <span class="qq-edit-filename-icon-selector qq-edit-filename-icon" aria-label="Edit filename"></span>
                        </div>
                        <input class="qq-edit-filename-selector qq-edit-filename" tabindex="0" type="text">
                        <span class="qq-upload-size-selector qq-upload-size"></span>
                        <button type="button" class="qq-btn qq-upload-delete-selector qq-upload-delete">
                            <span class="qq-btn qq-delete-icon" aria-label="Delete"></span>
                        </button>
                        <button type="button" class="qq-btn qq-upload-pause-selector qq-upload-pause">
                            <span class="qq-btn qq-pause-icon" aria-label="Pause"></span>
                        </button>
                        <button type="button" class="qq-btn qq-upload-continue-selector qq-upload-continue">
                            <span class="qq-btn qq-continue-icon" aria-label="Continue"></span>
                        </button>
                    </div>
                </li>
            </ul>

            <dialog class="qq-alert-dialog-selector">
                <div class="qq-dialog-message-selector"></div>
                <div class="qq-dialog-buttons">
                    <button type="button" class="qq-cancel-button-selector">Close</button>
                </div>
            </dialog>

            <dialog class="qq-confirm-dialog-selector">
                <div class="qq-dialog-message-selector"></div>
                <div class="qq-dialog-buttons">
                    <button type="button" class="qq-cancel-button-selector">No</button>
                    <button type="button" class="qq-ok-button-selector">Yes</button>
                </div>
            </dialog>

            <dialog class="qq-prompt-dialog-selector">
                <div class="qq-dialog-message-selector"></div>
                <input type="text">
                <div class="qq-dialog-buttons">
                    <button type="button" class="qq-cancel-button-selector">Cancel</button>
                    <button type="button" class="qq-ok-button-selector">Ok</button>
                </div>
            </dialog>
        </div>
    </script>

    <title>Fine Uploader Gallery View Demo</title>
</head>
<body>
    <!-- Fine Uploader DOM Element
    ====================================================================== -->
    <div id="fine-uploader-gallery"></div>

    <!-- Your code to create an instance of Fine Uploader and bind to the DOM/template
    ====================================================================== -->
    <script>
        $('#fine-uploader-gallery').fineUploader({
            template: 'qq-template-gallery',
            request: {
                endpoint: 'http://127.0.0.1:8000/'
            },
            thumbnails: {
                placeholders: {
                    waitingPath: 'waiting-generic.png',
                    notAvailablePath: 'not_available-generic.png'
                }
            },
            validation: {
                allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
            }
        });
    </script>
</body>
</html>