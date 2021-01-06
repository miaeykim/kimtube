# Kimtube - YouTube clone

## Introduction
Kimtube is a video posting web application. This project is created as a learning course from [Inflearn](https://inf.run/E9qd)
to learn React and Node.js.

## Technologies
- React version: 16.8.6
- Node.js version: 10.16.0
- Redux version: 4.0.0
- MongoDB

## Features
![](https://user-images.githubusercontent.com/52260097/103731633-f7214a00-5028-11eb-8ddb-9c8761cbfe0d.gif)

- Responsive design
- Navbar switching via login

### Video Uploading
![](https://user-images.githubusercontent.com/52260097/103735258-00161980-5031-11eb-9be4-bf91385dac8e.gif)

#### NPM
- `Dropzone`: upload video from client
- `ffmpeg`: auto-generate video thumbnail
- `Multer`: save video to server

### Comment
- Single Comment
  - User info
  - Content
  - Comment form
  - Actions (like & dislike, reply to)

- Reply Comment

`<Single Comment />` + `<ReplyComment />` 
for more depth

### Like & Dislike
Reuse `<LikeDislikes />` for video & comment
```javascript
let variable  = {}
    if(props.video) {
        variable = { videoId: props.videoId, userId: props.userId}
    } else{
        variable = { commentId: props.commentId, userId: props.userId}
    }
```

### Subscription
- Fetch subscription info via `userTo` & `userFrom`
- Compare video writer & local user id


## Screenshots
<img width="100%" alt="landing page" src="https://user-images.githubusercontent.com/52260097/103737895-749f8700-5036-11eb-90d7-f6350468bba3.png">
###### Landing Page

<img width="100%" alt="comment" src="https://user-images.githubusercontent.com/52260097/103738661-bd0b7480-5037-11eb-97a2-cb244fe279fa.png">
###### Video Detail Page

<img width="100%" alt="subscription" src="https://user-images.githubusercontent.com/52260097/103738675-c268bf00-5037-11eb-8cc7-196f94cd5fc0.png">
###### Subscription Page
