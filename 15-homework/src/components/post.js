import { commentIcon, retweetIcon, likeIcon, shareIcon } from "./icons";

function Post({ author, date, content, image, comments, retweets, likes }) {
  return (
    <div className="tweet-container">
      <div className="tweet-header">
        <img className="author-avatar" src={author.photo} alt="avatar" />
        <span className="author-name">{author.name}</span>
        <span className="author-nickname">{author.nickname}</span>
        <span className="tweet-date">{date}</span>
      </div>
      <div className="tweet-main">
        <p className="tweet-text">{content}</p>
        <img className="tweet-photo" src={image} alt="tweet-img" />
      </div>
      <div className="tweet-footer">
        <span>
          {commentIcon}
          {comments}
        </span>
        <span>
          {retweetIcon}
          {retweets}
        </span>
        <span>
          {likeIcon}
          {likes}
        </span>
        <span>{shareIcon}</span>
      </div>
    </div>
  );
}

export default Post;
