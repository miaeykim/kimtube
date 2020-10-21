# kimtube
video posting web application using React (#YouTube clone)

## `LandingPage.js`
![](landingpg.gif)
- Responsive design
- Navbar switching via login


## `VideoUploadPage.js`
![](videoupload.gif)
### NPMs
- Dropzone: upload video from client
- ffmpeg: auto-generate video thumbnail
- Multer: save video to server


## `VideoDetailPage.js`
![](comment.gif)
### Components
- `SideVideo.js`
- `LikeDislikes.js`
- `Comment.js` (`SingleComment.js` + `ReplyComment.js`)
- `Subscribe.js`


## `SubscriptionPage.js`
![](likesub.gif)
- Fetch subscription info via `userTo` & `userFrom`
- Compare video writer & local user's ids
