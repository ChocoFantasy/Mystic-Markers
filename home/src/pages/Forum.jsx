import React, { useState } from "react";
import Navbar from "../component/Navbar";
import "../style.scss";
import ArticleList from "../component/ArticleList"; // 引入 ArticleList 組件
import articles from "../js/articlesData";
import PostModal from "../component/PostModal"; // 引入彈出視窗組件

const Forum = () => {
  // 搜尋相關邏輯
  const [searchValue, setSearchValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const dummyData = [
    { title: "民雄鬼屋" },
    { title: "荒廢" },
    { title: "噩夢" },
    { title: "SCP" },
  ];

  const handleSearch = () => {
    if (searchValue.trim() === "") return; // 空值不搜尋
    const results = dummyData.filter((item) =>
      item.title.includes(searchValue)
    );
    setFilteredResults(results);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // 發文彈出視窗
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* 頁面橫幅 */}
      <section id="banner">
        <Navbar />
      </section>

      {/* 主體 */}
      <div className="forum-body">
        <div className="forum-container">
          <div className="forum-layout">
            {/* 側邊欄位 */}
            <aside className="sidebar">
              <div className="sidebar-content">
                <nav className="category-board">
                  <ul className="category-list" role="list">
                    {[
                      { icon: "Forum_list-box", label: "所有看板" },
                      { icon: "Forum-symbols-book-5", label: "都市傳說" },
                      { icon: "Forum_building", label: "廢墟探險" },
                      { icon: "Forum_movie", label: "恐怖獵奇" },
                      { icon: "Forum_ghost-2", label: "恐怖作品" },
                      { icon: "Forum_temple", label: "驅邪收驚" },
                      { icon: "Forum_building", label: "我的收藏" },
                    ].map((item, index) => (
                      <li key={index} className="category-item" role="listitem">
                        <div>
                          <img
                            src={`../public/images/Forum/${item.icon}.svg`}
                            alt={item.label}
                          />
                          <p>{item.label}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="ad-section" role="complementary" aria-label="廣告區域">
                  <img
                    className="ad-text"
                    src="../public/images/Forum/HORRO.svg"
                    alt="廣告"
                  />
                </div>
              </div>
            </aside>

            {/* 主內容 */}
            <main className="main-content">
              <div className="top-bar">
                {/* 按鈕欄 */}
                <div className="nav-buttons">
                  {[
                    { icon: "mingcute_fire-fill", label: "熱門" },
                    { icon: "emojione-monotone_new-button", label: "最新" },
                    { icon: "ooui_notice", label: "發文規則" },
                  ].map((item, index) => (
                    <div key={index}>
                      <img
                        src={`../public/images/Forum/${item.icon}.svg`}
                        alt={item.label}
                      />
                      <button className="nav-button" type="button">
                        <p>{item.label}</p>
                      </button>
                    </div>
                  ))}
                </div>

                {/* 搜尋欄位 */}
                <div className="right-bar">
                  <div className="search-bar-container">
                    <div className="search-bar">
                      <input
                        type="text"
                        className="search-input"
                        placeholder="搜尋 民雄鬼屋"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                      />
                      <button className="search-button" onClick={handleSearch}>
                        <img
                          src="../public/images/Forum/iconamoon_search.svg"
                          alt="搜尋"
                        />
                      </button>
                    </div>
                    {/* 搜尋結果 */}
                    <div className="search-results">
                      {filteredResults.length > 0 ? (
                        <ul>
                          {filteredResults.map((item, index) => (
                            <li key={index}>{item.title}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>沒有找到相關結果。</p>
                      )}
                    </div>
                  </div>

                  {/* 發表文章按鈕 */}
                  <div className="PostModal-bar">
                    <img
                      src="../../images/Forum/jam_write.png"
                      alt="撰寫文章"
                      style={{ cursor: "pointer", width: "50px" }}
                      onClick={() => setModalOpen(true)}
                    />
                    <PostModal
                      isOpen={isModalOpen}
                      onClose={() => setModalOpen(false)}
                    />
                  </div>
                </div>
              </div>

              {/* 文章列表 */}
              <ArticleList articles={articles} />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forum;
