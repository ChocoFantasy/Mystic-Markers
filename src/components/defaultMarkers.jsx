import { generateComments } from './presetComments';
import { presetComments } from './presetComments';

// 為每個預設標記生成隨機評論和平均評分
const generateMarkerData = (markerId, baseMarker) => {
  // 如果有 pageId，使用對應的預設評論
  let comments;
  if (baseMarker.pageId) {
    const pageKey = `page${baseMarker.pageId}`;
    comments = presetComments[pageKey] || [];
  } else {
    // 如果沒有 pageId，則生成隨機評論
    const commentCount = Math.floor(Math.random() * 11) + 5;
    comments = generateComments(markerId, commentCount);
  }

  // 計算平均評分
  const averageRating = comments.length > 0
    ? comments.reduce((acc, comment) => acc + comment.rating, 0) / comments.length
    : 0;

  return {
    ...baseMarker,
    comments,
    rating: averageRating
  };
};
// 預設標記點資料
const defaultMarkers = [

  generateMarkerData("minxiong-ghost-house", {
    id: "minxiong-ghost-house",
    position: [23.53049980511441, 120.4266064784499],
    title: "民雄鬼屋",
    city: "嘉義縣",
    district: "民雄鄉",
    coverPhoto: "images/Mapgallery/p1/image1.jpg",
    description: "台灣知名的靈異景點，充滿神秘氣息。",
    userId: "system",
    userName: "風花七月",
    userAvatar: "images/Avatars/avatar (20).jpg",
    pageId: '1', // 對應到 gallery page 的 ID
   
  }),
  generateMarkerData("xinhai-tunnel", {
    id: "xinhai-tunnel",
    position: [25.011614093392986, 121.55546043277306],
    title: "辛亥隧道",
    city: "台北市",
    district: "大安區",
    coverPhoto: "images/Mapgallery/p2/image6.jpg",
    description: "曾發生多起意外，傳說有靈異現象的隧道。",
    userId: "system",
    userName: "王招弟",
    userAvatar: "images/Avatars/avatar (43).jpg",
    pageId: '2', // 對應到 gallery page 的 ID
  }),
  generateMarkerData("lin-kai-jun-mansion", {
    id: "lin-kai-jun-mansion",
    position: [25.130059311815405, 121.74211446952336],
    title: "林開郡洋樓",
    city: "基隆市",
    district: "仁愛區",
    coverPhoto: "images/Mapgallery/p3/image1.jpg",
    description: "古老的日治時期建築，據說晚上常有異象出現。",
    userId: "system",
    userName: "路奇雅",
    userAvatar: "images/Avatars/avatar (36).jpg",
    pageId: '3',
  
  }),
  generateMarkerData("xining-residential-complex", {
    id: "xining-residential-complex",
    position: [25.048141988825822, 121.50671607830216],
    title: "西寧國宅",
    city: "台北市",
    district: "萬華區",
    coverPhoto: "images/Mapgallery/p4/image1.jpg",
    description: "老舊國宅，居民口中流傳著靈異故事。",
    userId: "system",
    userName: "迷糊小道士",
    userAvatar: "images/Avatars/avatar (3).jpg",
    pageId: '4',
   
  }),
  generateMarkerData("keelung-haunted-hospital", {
    id: "keelung-haunted-hospital",
    position: [25.12825, 121.74474],
    title: "基隆靈異醫院",
    city: "基隆市",
    district: "信義區",
    coverPhoto: "images/Map/default-location.jpg",
    description: "廢棄醫院，據說夜晚會有鬼影出現，令人毛骨悚然。",
    userId: "system",
    userName: "雨哥講鬼話",
    userAvatar: "images/Avatars/avatar (5).jpg",
    pageId: '4',
   
  }),
  generateMarkerData("ntou-dorm", {
    id: "ntou-dorm",
    position: [25.150209, 121.778541],
    title: "海洋大學宿舍",
    city: "基隆市",
    district: "中正區",
    coverPhoto: "images/Map/ntou-dorm.jpg",
    description: "學生間流傳的靈異故事，晚間氣氛詭異。",
    userId: "system",
    userName: "影子嵐求緣",
    userAvatar: "images/Avatars/avatar (7).jpg",
  }),
  generateMarkerData("taipei-haunted-hospital", {
    id: "taipei-haunted-hospital",
    position: [25.027347409668455, 121.55625730822938],
    title: "台北廢棄醫院",
    city: "台北市",
    district: "信義區",
    coverPhoto: "images/Map/taipei-haunted-hospital.jpg",
    description: "已經廢棄一年半的醫院。",
    userId: "system",
    userName: "柯北北",
    userAvatar: "images/Avatars/avatar (43).jpg",
  }),

  generateMarkerData("shimen-reservoir", {
    id: "shimen-reservoir",
    position: [24.833567, 121.216837],
    title: "石門水庫",
    city: "桃園市",
    district: "龍潭區",
    coverPhoto: "images/Map/shimen-reservoir.jpg",
    description: "傳聞有許多水鬼故事",
    userId: "system",
    userName: "夜鷺走多",
    userAvatar: "images/Avatars/avatar (9).jpg",
  }),
  generateMarkerData("jingmei-night-market", {
    id: "jingmei-night-market",
    position: [24.988846, 121.539733],
    title: "景美夜市",
    city: "台北市",
    district: "文山區",
    coverPhoto: "images/Map/jingmei-night-market.jpg",
    description: "據說某些攤位有靈異事件發生",
    userId: "system",
    userName: "霜歌",
    userAvatar: "images/Avatars/avatar (8).jpg",
  }),
  generateMarkerData("cheng-huang-temple", {
    id: "cheng-huang-temple",
    position: [24.805619, 120.968874],
    title: "新竹城隍廟",
    city: "新竹市",
    district: "北區",
    coverPhoto: "images/Map/cheng-huang-temple.jpg",
    description: "古老廟宇，曾見靈異傳聞",
    userId: "system",
    userName: "貢丸擺渡人",
    userAvatar: "images/Avatars/avatar (6).jpg",
  }),
  generateMarkerData("taichung-haunted-ktv", {
    id: "taichung-haunted-ktv",
    position: [24.151635, 120.665866],
    title: "台中鬧鬼KTV",
    city: "台中市",
    district: "北區",
    coverPhoto: "images/Map/taichung-haunted-ktv.jpg",
    description: "據說這間KTV內曾發生靈異事件，成為熱門探險地點。",
    userId: "system",
    userName: "吟遊詩人",
    userAvatar: "images/Avatars/avatar (30).jpg",
  }),
  generateMarkerData("pingxi-river-ghost", {
    id: "pingxi-river-ghost",
    position: [25.032989, 121.736982],
    title: "平溪河邊幽靈",
    city: "新北市",
    district: "平溪區",
    coverPhoto: "images/Map/pingxi-river-ghost.jpg",
    description: "傳聞河邊夜晚經常出現神秘的白影，令人不寒而慄。",
    userId: "system",
    userName: "天燈",
    userAvatar: "images/Avatars/avatar (15).jpg",
  }),
  generateMarkerData("alishan-ghost-trail", {
    id: "alishan-ghost-trail",
    position: [23.508038, 120.806392],
    title: "阿里山靈異步道",
    city: "嘉義縣",
    district: "阿里山鄉",
    coverPhoto: "images/Map/alishan-ghost-trail.jpg",
    description: "阿里山著名步道之一，據說深夜時分常聽到神秘腳步聲。",
    userId: "system",
    userName: "嘉義彭于晏",
    userAvatar: "images/Avatars/avatar (17).jpg",
  }),
    generateMarkerData("taoyuan-haunted-university", {
      id: "taoyuan-haunted-university",
      position: [24.969037, 121.191308],
      title: "桃園鬧鬼大學",
      city: "桃園市",
      district: "大溪區",
      coverPhoto: "images/Map/default-location.jpg",
      description: "這所廢棄的校舍被認為是靈異探險愛好者的天堂。",
      userId: "system",
      userName: "桃氣鬼",
      userAvatar: "images/Avatars/avatar (43).jpg",
    }),
    generateMarkerData("yushan-ghost-spot", {
      id: "yushan-ghost-spot",
      position: [23.471234, 120.957865],
      title: "玉山靈異地點",
      city: "南投縣",
      district: "信義鄉",
      coverPhoto: "images/Map/yushan-ghost-spot.jpg",
      description: "據說登山客在夜晚經常聽到莫名的聲響和腳步聲。",
      userId: "system",
      userName: "小飛俠",
      userAvatar: "images/Avatars/avatar (55).jpg",
    }),
    generateMarkerData("kaohsiung-haunted-ktv", {
      id: "kaohsiung-haunted-ktv",
      position: [22.632683676918454, 120.29478030250726],
      title: "高雄鬧鬼KTV",
      city: "高雄市",
      district: "前金區",
      coverPhoto: "images/Map/default-location.jpg",
      description: "這間廢棄KTV據說有許多靈異故事流傳。",
      userId: "system",
      userName: "夜夜笙歌",
      userAvatar: "images/Avatars/avatar (84).jpg",
    }),
    generateMarkerData("nantou-river-ghost", {
      id: "nantou-river-ghost",
      position: [23.919619, 120.862404],
      title: "南投溪邊幽靈",
      city: "南投縣",
      district: "魚池鄉",
      coverPhoto: "images/Map/nantou-river-ghost.jpg",
      description: "當地居民傳說溪邊經常出現白影和怪聲。",
      userId: "system",
      userName: "雙魚姑娘",
      userAvatar: "images/Avatars/avatar (77).jpg",
    }),
    generateMarkerData("tainan-haunted-mansion", {
      id: "tainan-haunted-mansion",
      position: [22.987753, 120.218231],
      title: "台南鬧鬼古宅",
      city: "台南市",
      district: "中西區",
      coverPhoto: "images/Map/default-location.jpg",
      description: "這座歷史悠久的古宅流傳許多靈異傳說。",
      userId: "system",
      userName: "甜甜",
      userAvatar: "images/Avatars/avatar (56).jpg",
    }),
    generateMarkerData("hualien-haunted-monument", {
      id: "hualien-haunted-monument",
      position: [23.987567, 121.604413],
      title: "花蓮鬧鬼古蹟",
      city: "花蓮縣",
      district: "花蓮市",
      coverPhoto: "images/Map/default-location.jpg",
      description: "這座古蹟因其陰森的氛圍而聞名。",
      userId: "system",
      userName: "薩基努",
      userAvatar: "images/Avatars/avatar (32).jpg",
    }),
    generateMarkerData("kenting-abandoned-villa", {
      id: "kenting-abandoned-villa",
      position: [21.947776, 120.780472],
      title: "墾丁廢棄別墅",
      city: "屏東縣",
      district: "恆春鎮",
      coverPhoto: "images/Map/default-location.jpg",
      description: "這棟廢棄別墅多年來無人敢靠近，傳聞四起。",
      userId: "system",
      userName: "走過路過",
      userAvatar: "images/Avatars/avatar (71).jpg",
    }),
    generateMarkerData("chiayi-abandoned-hotel", {
      id: "chiayi-abandoned-hotel",
      position: [23.465308, 120.445844],
      title: "嘉義廢棄旅館",
      city: "嘉義縣",
      district: "番路鄉",
      coverPhoto: "images/Map/default-location.jpg",
      description: "這間旅館已被廢棄多年，內部充滿陰森的氣息。",
      userId: "system",
      userName: "千洋",
      userAvatar: "images/Avatars/avatar (30).jpg",
    }),
    generateMarkerData("taitung-haunted-bridge", {
      id: "taitung-haunted-bridge",
      position: [22.755311, 121.139956],
      title: "台東鬧鬼橋樑",
      city: "台東縣",
      district: "台東市",
      coverPhoto: "images/Map/taitung-haunted-bridge.jpg",
      description: "這座橋樑據說是當地最靈異的地方之一。",
      userId: "system",
      userName: "嘉義彭于晏",
      userAvatar: "images/Avatars/avatar (38).jpg",
    }),
];


export default defaultMarkers;