import "./App.css";
import Post from "./components/post";
import Avatar from "./assets/9gag.jpg";
import PhotoTweet from "./assets/photo-post.jpg";

const dateInfo = new Date().toLocaleDateString();

const postContent = {
  author: {
    photo: Avatar,
    name: "9gag",
    nickname: "@9gag ·",
  },
  date: dateInfo,
  content: "I’m good at everything except the things that I can’t do.",
  image: PhotoTweet,
  comments: "283",
  retweets: "501",
  likes: "987",
};

function App() {
  return (
    <div className="App">
      <Post
        author={postContent.author}
        name={postContent.name}
        nickname={postContent.nickname}
        date={postContent.date}
        photo={postContent.photo}
        content={postContent.content}
        image={postContent.image}
        comments={postContent.comments}
        retweets={postContent.retweets}
        likes={postContent.likes}
      />
    </div>
  );
}

export default App;
