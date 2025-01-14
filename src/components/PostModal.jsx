import React, { useState } from "react";
import "../style.scss";

const PostModal = ({ isOpen, onClose, onNewArticle }) => {
  if (!isOpen) return null;

  // 本地狀態管理表單輸入
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("都市傳說");
  const [authorName, setAuthorName] = useState("匿名用戶");
  const [authorAvatar, setAuthorAvatar] = useState("images/Forum/default-avatar.svg");
  const [articleImage, setArticleImage] = useState("images/Forum/default-image.svg");

  // 提交新文章
  const handleSubmit = () => {
    const newArticle = {
      id: Date.now(), // 唯一 ID
      commentCount: 0,
      comments: [],
      category,
      authorName,
      authorAvatar,
      title,
      preview: content.substring(0, 100), // 預覽文字
      isFavorite: false,
      articleImage,
      interactions: [
        {
          icon: "images/Forum/Forum_ghost.svg",
          filledIcon: "images/Forum/solar_ghost-outline.svg",
          count: 0,
          altText: "like",
        },
        {
          icon: "images/Forum/mynaui_message.svg",
          count: 0,
          altText: "message",
        },
        {
          icon: "images/Forum/Forum_label.svg",
          filledIcon: "images/Forum/MapCollect.png",
          count: 0,
          altText: "label",
        },
      ],
    };

    onNewArticle(newArticle); // 傳回新文章至父組件
    onClose(); // 關閉彈窗
  };

  return (
    <div className="post-modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>新增文章</h2>
        <div className="form-group">
          <label>分類看板</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="都市傳說">都市傳說</option>
            <option value="廢墟探險">廢墟探險</option>
            <option value="恐怖獵奇">恐怖獵奇</option>
            <option value="恐怖作品">恐怖作品</option>
            <option value="驅邪收驚">驅邪收驚</option>
          </select>
        </div>
        <div className="form-group">
          <label>作者名稱</label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="請輸入作者名稱"
          />
        </div>
        <div className="form-group">
          <label>作者頭像 URL</label>
          <input
            type="text"
            value={authorAvatar}
            onChange={(e) => setAuthorAvatar(e.target.value)}
            placeholder="請輸入作者頭像的圖片連結"
          />
        </div>
        <div className="form-group">
          <label>文章圖片 URL</label>
          <input
            type="text"
            value={articleImage}
            onChange={(e) => setArticleImage(e.target.value)}
            placeholder="請輸入文章圖片的圖片連結"
          />
        </div>
        <div className="form-group">
          <label>標題</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="請輸入文章標題"
          />
        </div>
        <div className="form-group">
          <label>內容</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="撰寫您的文章內容..."
          />
        </div>
        <div className="form-actions">
          <button onClick={onClose}>取消</button>
          <button onClick={handleSubmit}>送出</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
