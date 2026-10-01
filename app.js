/* ============================================================
   少女の导航站 — 原生 JS 版
   数据（文章/分类）由构建脚本从原站 API 快照注入，全站离线可用
   ============================================================ */
'use strict';

/* ---------- 数据 ---------- */
const DATA = {
"posts": [
{
"postUrl": "nodejs-express-restful-api",
"title": "Node.js+Express构建RESTful API：从零到部署",
"description": "使用Node.js和Express框架搭建一套完整的RESTful API，包括路由设计、中间件使用、数据库连接、身份验证以及最终的服务器部署。",
"publishedDate": "2026-09-23T17:56:40.566Z",
"categories": [
{
"name": "后端技术",
"categoryUrl": "hou-duan-ji-shu"
}
],
"postContent": "<p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">本文将带领大家使用Node.js和Express框架搭建一套完整的RESTful API，适合后端初学者入门学习。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">一、项目初始化</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">首先我们需要初始化项目并安装Express框架，搭建起最基本的服务器骨架。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">二、路由设计</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">一个清晰的路由设计是RESTful API的基础，我们按照资源来组织路由，遵循GET、POST、PUT、DELETE等HTTP方法的语义。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">三、中间件的使用</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">中间件是Express的核心概念，我们可以用它来处理日志记录、请求体解析、错误处理等通用逻辑。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">四、数据库连接与身份验证</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">接入数据库后，我们为接口加上身份验证机制，确保只有合法用户才能访问受保护的资源。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">五、部署上线</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">最后，我们将应用部署到服务器上，配置好环境变量和进程守护，让服务稳定运行。</span></p>"
},
{
"postUrl": "react-hooks-complete-guide",
"title": "React Hooks完全指南：从基础到高级用法",
"description": "全面讲解useState、useEffect等常用Hooks的使用场景，以及自定义Hooks的封装技巧。",
"publishedDate": "2026-09-23T17:56:40.566Z",
"categories": [
{
"name": "前端开发",
"categoryUrl": "qian-duan-kai-fa"
}
],
"postContent": "<p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">React Hooks彻底改变了React组件的编写方式，让函数组件拥有了状态管理能力。本文将全面讲解常用Hooks的使用场景，以及自定义Hooks的封装技巧。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">一、useState：状态管理的基础</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">useState让函数组件也能拥有自己的状态，是最常用也是最基础的Hook。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">二、useEffect：处理副作用</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">useEffect用来处理数据请求、订阅、手动修改DOM等副作用操作，理解它的依赖数组机制是掌握它的关键。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">三、其他常用Hooks</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">useContext、useRef、useMemo、useCallback等Hooks分别解决了跨组件状态共享、引用保存、性能优化等不同场景的问题。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">四、自定义Hooks</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">把重复的逻辑封装成自定义Hooks，可以让组件代码更加简洁，也方便在多个组件间复用逻辑。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">五、总结</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">掌握Hooks的使用场景和最佳实践，是写好现代React应用的必修课。</span></p>"
},
{
"postUrl": "tailwind-css-guide",
"title": "Tailwind CSS从入门到精通：构建现代化响应式网页",
"description": "Tailwind CSS作为一款实用优先的CSS框架，正在被越来越多的开发者使用。本文详细介绍核心概念、安装配置以及实战技巧。",
"publishedDate": "2026-09-23T17:56:40.566Z",
"categories": [
{
"name": "前端开发",
"categoryUrl": "qian-duan-kai-fa"
}
],
"postContent": "<p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">大家好，今天我们来深入学习Tailwind CSS这款革命性的CSS框架。在传统的CSS开发中，我们往往需要定义大量的类名，并且需要处理各种样式冲突的问题。而Tailwind CSS通过提供一套原子化的CSS工具类，让我们可以直接在HTML中构建复杂的界面，无需编写自定义CSS。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">一、Tailwind CSS的核心优势</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">Tailwind CSS的核心优势主要体现在以下几个方面：</span></p><ul class=\"list textnormal\"><li value=\"1\"><span style=\"white-space: pre-wrap;\">原子化CSS，无需编写自定义样式</span></li><li value=\"2\"><span style=\"white-space: pre-wrap;\">高度可定制化，可以通过配置文件自定义主题</span></li><li value=\"3\"><span style=\"white-space: pre-wrap;\">响应式设计友好，内置多种屏幕尺寸前缀</span></li><li value=\"4\"><span style=\"white-space: pre-wrap;\">优化的生产环境构建，自动移除未使用的样式</span></li><li value=\"5\"><span style=\"white-space: pre-wrap;\">丰富的插件生态，扩展框架功能</span></li></ul><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">二、安装与配置</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">Tailwind CSS的安装非常简单，我们可以通过npm进行安装，然后在配置文件中设置好内容扫描路径，就可以开始使用了。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">三、实战案例：构建响应式卡片</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">通过组合背景、圆角、阴影和排版相关的工具类，我们可以快速构建一个精美的卡片组件，而无需编写任何自定义CSS样式，这就是Tailwind CSS的强大之处。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">四、总结与展望</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">Tailwind CSS正在改变前端开发的方式，它让样式开发变得更加高效和灵活。虽然刚开始使用时可能会觉得HTML代码变得冗长，但一旦熟悉了各种工具类的使用，你就会发现它带来的生产力提升是巨大的。未来，相信会有更多的开发者加入到这个生态中。</span></p>"
},
{
"postUrl": "vue3-pinia-admin-system",
"title": "Vue3+Pinia构建电商后台管理系统：实战详解",
"description": "基于Vue3、Vite、Pinia和Element Plus构建的电商后台管理系统，包含用户管理、商品管理、订单管理等核心功能。",
"publishedDate": "2026-09-23T17:56:40.566Z",
"categories": [
{
"name": "项目实战",
"categoryUrl": "xiang-mu-shi-zhan"
}
],
"postContent": "<p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">基于Vue3、Vite、Pinia和Element Plus构建的电商后台管理系统，包含用户管理、商品管理、订单管理等核心功能。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">一、项目架构设计</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">整个项目采用模块化的架构设计，将业务逻辑拆分成清晰的模块，方便团队协作与后续维护。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">二、状态管理：Pinia</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">相比于Vuex，Pinia提供了更简洁的API和更好的TypeScript支持，我们用它来管理全局的用户状态和商品数据。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">三、组件封装</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">我们把常用的表格、表单和弹窗封装成可复用组件，大幅提升了开发效率。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">四、核心功能实现</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">用户管理、商品管理、订单管理三大模块相互配合，构成了完整的后台管理闭环。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">五、经验总结</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">这个项目让我对大型中后台系统的架构设计有了更深的理解，也积累了不少组件封装的经验。</span></p>"
},
{
"postUrl": "programmer-three-years-growth",
"title": "程序员的三年成长之路：从入门到资深工程师的蜕变",
"description": "作为一名从业三年的程序员，分享从零基础入门到独立负责大型项目的成长过程、学习方法与职业规划建议。",
"publishedDate": "2026-09-23T17:56:40.566Z",
"categories": [
{
"name": "生活感悟",
"categoryUrl": "sheng-huo-gan-wu"
}
],
"postContent": "<p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">作为一名从业三年的程序员，我经历了从零基础入门到独立负责大型项目的成长过程。本文分享我的学习方法、踩过的坑以及职业规划建议，希望能给刚入行的小伙伴一些参考。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">第一年：打好基础</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">第一年主要是打好语言和框架基础，遇到问题就多查文档、多写代码，慢慢建立起自己的知识体系。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">第二年：独立负责模块</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">第二年开始独立负责项目中的具体模块，学会了如何和产品、设计沟通，也逐渐理解了工程化的重要性。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">第三年：全局视角</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">第三年开始从全局视角思考架构设计，也开始带新人，把自己的经验传递下去。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">写在最后</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">成长的路上没有捷径，保持好奇心和持续学习的习惯，才是最重要的事情。</span></p>"
},
{
"postUrl": "frontend-interview-questions-2025",
"title": "2025年前端面试高频题汇总：附详细解答思路",
"description": "汇总2025年前端面试中的高频考点，包括JavaScript基础、框架原理、性能优化等内容，并提供详细的解答思路。",
"publishedDate": "2026-09-23T17:56:40.566Z",
"categories": [
{
"name": "生活感悟",
"categoryUrl": "sheng-huo-gan-wu"
}
],
"postContent": "<p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">临近年底，很多小伙伴都在准备跳槽面试。本文汇总了前端面试中的高频考点，并提供了详细的解答思路，希望能帮到正在准备面试的你。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">一、JavaScript基础</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">闭包、原型链、事件循环依然是面试中的常客，理解它们背后的运行机制比死记硬背更重要。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">二、框架原理</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">面试官越来越喜欢问框架的底层原理，比如虚拟DOM的диff算法、响应式系统的实现原理等。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">三、性能优化</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">从加载优化到渲染优化，性能优化是体现候选人工程能力的重要考察点。</span></p><h3 class=\"textheading3\"><span style=\"white-space: pre-wrap;\">四、面试小建议</span></h3><p class=\"paragraph textnormal\"><span style=\"white-space: pre-wrap;\">除了技术准备，保持自信、清晰表达思路同样重要，面试也是一次双向选择的过程。</span></p>"
}
],
"categories": [
{
"name": "前端开发",
"categoryUrl": "qian-duan-kai-fa"
},
{
"name": "后端技术",
"categoryUrl": "hou-duan-ji-shu"
},
{
"name": "生活感悟",
"categoryUrl": "sheng-huo-gan-wu"
},
{
"name": "项目实战",
"categoryUrl": "xiang-mu-shi-zhan"
}
]
};
const POSTS = DATA.posts;
const CATEGORIES = DATA.categories;

const DESTINATIONS = [
  { emoji: '📺', tag: '二次元', name: 'B站', desc: '动漫、游戏、学习，年轻人的社区', href: 'https://www.bilibili.com/', color: '#FFE3EF' },
  { emoji: '📕', tag: '时尚', name: '小红书', desc: '美妆、穿搭、旅行，记录美好生活', href: 'https://www.xiaohongshu.com/', color: '#F3D9FF' },
  { emoji: '🧠', tag: '知识', name: '知乎', desc: '知识分享，发现更大的世界', href: 'https://www.zhihu.com/', color: '#DCE0FF' },
  { emoji: '🌷', tag: '个人', name: '我的小窝', desc: '个人博客 / 作品集 / 日常分享', href: '#/xiaowo', color: '#FFE0EC', internal: true },
  { emoji: '🐙', tag: '编程', name: 'GitHub', desc: '代码托管，开源世界的大门', href: 'https://www.github.com/', color: '#E4DCFF' },
  { emoji: '🎵', tag: '音乐', name: '网易云音乐', desc: '听歌、评论、遇见相似的灵魂', href: 'https://music.163.com/', color: '#FFE9D6' },
];

const PHOTOS = [
  { src: 'img/12.jpg', label: '日落时分' },
  { src: 'img/34.jpg', label: '雪山之颅' },
  { src: 'img/56.jpg', label: '海边漫步' },
  { src: 'img/78.jpg', label: '樱花树下' },
  { src: 'img/90.jpg', label: '星空银河' },
  { src: 'img/110.jpg', label: '烟花大会' },
];

const PLAYLIST = [
  '好男人', '雪山之颅', '海边漫步', '日落时分', '星空银河',
  '烟花大会', '樱花雨', '夜行船', '温柔乡', '遂想',
];

const QUICK_LINKS = [
  { emoji: '📺', label: 'B站', sub: '动漫·游戏', href: 'https://www.bilibili.com/' },
  { emoji: '📕', label: '小红书', sub: '美妆·穿搭', href: 'https://www.xiaohongshu.com/' },
  { emoji: '🎵', label: '网易云', sub: '听歌·灵魂', href: 'https://music.163.com/' },
  { emoji: '🧠', label: '知乎', sub: '知识·世界', href: 'https://www.zhihu.com/' },
  { emoji: '🐙', label: 'GitHub', sub: '代码·开源', href: 'https://github.com/luziyao504?tab=repositories' },
  { emoji: '✍️', label: '我的博客', sub: '文字·分享', href: '#/blog', internal: true },
  { emoji: '🎬', label: '抖音', sub: '视频·直播', href: 'https://www.douyin.com/user/MS4wLjABAAAAoSuENO2Dti0k27EAO2vGjsUN6YBTE9dsHj9brpg7ojy-fHvG_6souuIm_uoM0dKz' },
  { emoji: '☕', label: '摩鱼时间', sub: '放松·休息', href: '#', dead: true },
];

const SEED_MESSAGES = [
  { name: '路过的风', text: '好喜欢这个小窝的风格，好温暖呀 🌸', time: '2天前' },
  { name: '星星', text: '相册里的樱花照片太美了吧！', time: '5天前' },
];

const WEEKDAYS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

/* ---------- 工具 ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function formatPostDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return '';
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/* ---------- 博客卡片渲染（首页预告 & 列表页通用） ---------- */
function postCardHtml(post) {
  const cats = (post.categories || [])
    .map((c) => `<span>${escapeHtml(c.name)}</span>`)
    .join('');
  return `
    <a class="glass-card post-card" data-route="/blog/${encodeURIComponent(post.postUrl)}" href="#/blog/${encodeURIComponent(post.postUrl)}" data-testid="blog-post-card">
      <div class="post-card-img">
        <div class="post-card-img-placeholder" aria-hidden="true">🌸</div>
      </div>
      <div class="post-card-body">
        ${cats ? `<div class="post-cats">${cats}</div>` : ''}
        <h3>${escapeHtml(post.title)}</h3>
        ${post.description ? `<p class="desc">${escapeHtml(post.description)}</p>` : ''}
        <div class="post-date">${formatPostDate(post.publishedDate)}</div>
      </div>
    </a>`;
}

function renderBlogTeaser() {
  $('#blog-teaser-grid').innerHTML = POSTS.slice(0, 3).map(postCardHtml).join('');
}

let activeCategory = null;

function renderCategoryBar() {
  const buttons = [
    `<button type="button" class="cat-btn${activeCategory === null ? ' active' : ''}" data-cat="">全部文章</button>`,
    ...CATEGORIES.map(
      (c) => `<button type="button" class="cat-btn${activeCategory === c.categoryUrl ? ' active' : ''}" data-cat="${escapeHtml(c.categoryUrl)}">${escapeHtml(c.name)}</button>`,
    ),
  ];
  $('#category-bar').innerHTML = buttons.join('');
}

function renderBlogList() {
  renderCategoryBar();
  const list = activeCategory
    ? POSTS.filter((p) => (p.categories || []).some((c) => c.categoryUrl === activeCategory))
    : POSTS;

  const grid = $('#blog-list-grid');
  const empty = $('#blog-list-empty');
  if (list.length === 0) {
    grid.innerHTML = '';
    empty.textContent = '还没有文章呢，换个分类看看吧';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  grid.innerHTML = list.map(postCardHtml).join('');
}

function renderBlogPost(slug) {
  const wrap = $('#blog-post-container');
  const post = POSTS.find((p) => p.postUrl === slug);

  if (!post) {
    wrap.innerHTML = '<p class="state-text error" style="text-align:center">文章不存在或已下架 🌸</p>';
    document.title = '文章未找到 · 少女の导航站';
    return;
  }

  document.title = `${post.title} · 少女の导航站`;
  const cats = (post.categories || [])
    .map((c) => `<span>${escapeHtml(c.name)}</span>`)
    .join('');

  wrap.innerHTML = `
    <a class="btn-secondary back-btn" href="#/blog" data-route="/blog">← 返回博客</a>
    ${cats ? `<div class="detail-cats">${cats}</div>` : ''}
    <h1>${escapeHtml(post.title)}</h1>
    <div class="detail-date">${formatPostDate(post.publishedDate)}</div>
    <div class="post-body glass-card" data-testid="blog-detail">${post.postContent || ''}</div>`;
}

/* ---------- 静态区块渲染 ---------- */
function renderDestinations() {
  $('#dest-grid').innerHTML = DESTINATIONS.map((d) => {
    const target = d.internal ? '' : ' target="_blank" rel="noreferrer"';
    return `
      <a href="${d.href}"${target}>
        <div class="glass-card dest-card">
          <div class="glow" aria-hidden="true" style="background:${d.color}"></div>
          <div class="dest-body">
            <div class="dest-emoji">${d.emoji}</div>
            <div class="dest-tag">${d.tag}</div>
            <h3>${escapeHtml(d.name)}</h3>
            <p>${escapeHtml(d.desc)}</p>
          </div>
        </div>
      </a>`;
  }).join('');
}

function renderAlbum() {
  $('#album-scroll').innerHTML = PHOTOS.map(
    (p) => `
      <figure class="album-item glass-card">
        <img src="${p.src}" alt="${escapeHtml(p.label)}" loading="lazy" />
        <figcaption>${escapeHtml(p.label)}</figcaption>
      </figure>`,
  ).join('');
}

function renderQuickLinks() {
  $('#quicklink-grid').innerHTML = QUICK_LINKS.map((l) => {
    const target = l.internal || l.dead ? '' : ' target="_blank" rel="noreferrer"';
    const deadAttr = l.dead ? ' data-dead="1"' : '';
    return `
      <a href="${l.href}"${target}${deadAttr}>
        <div class="glass-card quicklink-item">
          <div class="q-emoji">${l.emoji}</div>
          <div class="q-label">${escapeHtml(l.label)}</div>
          <div class="q-sub">${escapeHtml(l.sub)}</div>
        </div>
      </a>`;
  }).join('');
}

/* ---------- 实时时钟 & 年末倒计时 ---------- */
function tickClock() {
  const now = new Date();
  $('#clock-time').textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  $('#clock-date').textContent = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 ${WEEKDAYS[now.getDay()]}`;

  const target = new Date(now.getFullYear(), 11, 31, 20, 0, 0);
  const remain = Math.max(target.getTime() - now.getTime(), 0);
  $('#cd-days').textContent = pad(Math.floor(remain / 86400000));
  $('#cd-hours').textContent = pad(Math.floor((remain / 3600000) % 24));
  $('#cd-minutes').textContent = pad(Math.floor((remain / 60000) % 60));
  $('#cd-seconds').textContent = pad(Math.floor((remain / 1000) % 60));
}

/* ---------- 留言板 ---------- */
let messages = SEED_MESSAGES.slice();

function renderMessages() {
  $('#message-list').innerHTML = messages
    .map(
      (m) => `
      <li class="message-item">
        <div class="message-meta">
          <span class="message-name">${escapeHtml(m.name)}</span>
          <span class="message-time">${escapeHtml(m.time)}</span>
        </div>
        <p class="message-text">${escapeHtml(m.text)}</p>
      </li>`,
    )
    .join('');
}

function initGuestbook() {
  $('#guestbook-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const nameEl = $('#gb-name');
    const textEl = $('#gb-text');
    const text = textEl.value.trim();
    if (!text) return;
    const name = nameEl.value.trim() || '匿名访客';
    messages = [{ name, text, time: '刚刚' }, ...messages];
    nameEl.value = '';
    textEl.value = '';
    renderMessages();
  });
}

/* ---------- 音乐角 ---------- */
let currentSong = 0;
let playing = false;

function renderPlayer() {
  $('#play-btn').textContent = playing ? '⏸' : '▶';
  $('#play-btn').setAttribute('aria-label', playing ? '暂停' : '播放');
  $('#now-song').textContent = PLAYLIST[currentSong];
  $('#playlist').innerHTML = PLAYLIST.map(
    (song, i) => `
      <li>
        <button type="button" class="song-btn${i === currentSong ? ' current' : ''}" data-song="${i}">
          <span class="song-idx">${i + 1}</span>${escapeHtml(song)}
        </button>
      </li>`,
  ).join('');
}

function initMusic() {
  $('#play-btn').addEventListener('click', () => {
    playing = !playing;
    renderPlayer();
  });
  $('#playlist').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-song]');
    if (!btn) return;
    currentSong = Number(btn.dataset.song);
    playing = true;
    renderPlayer();
  });
}

/* ---------- Hash 路由 ---------- */
const VIEWS = ['home', 'nest', 'blog', 'post'];
const ROUTE_VIEW = { '/': 'home', '/xiaowo': 'nest', '/blog': 'blog' };

function currentRoute() {
  const hash = location.hash.replace(/^#/, '') || '/';
  const [path, ...rest] = hash.split('/').filter(Boolean); // ["blog","slug"] | ["xiaowo"] | []
  if (!path) return { view: 'home', key: '/' };
  if (path === 'blog') {
    const slug = rest[0] ? decodeURIComponent(rest[0]) : null;
    return slug
      ? { view: 'post', key: `/blog/${rest[0]}`, slug }
      : { view: 'blog', key: '/blog' };
  }
  if (path === 'xiaowo') return { view: 'nest', key: '/xiaowo' };
  return { view: 'home', key: '/' };
}

function router() {
  const route = currentRoute();

  // 切换视图
  VIEWS.forEach((v) => {
    $(`#view-${v}`).classList.toggle('active', v === route.view);
  });

  // 导航高亮（文章详情页高亮“博客”）
  const activeNav =
    route.view === 'post' ? '/blog' :
    route.view === 'nest' ? '/xiaowo' :
    route.view === 'blog' ? '/blog' : '/';
  $$('.nav-link[data-route]').forEach((a) => {
    a.classList.toggle('active', a.dataset.route === activeNav);
  });

  // 视图数据
  if (route.view === 'blog') {
    activeCategory = null;
    renderBlogList();
    document.title = '博客 · 少女の导航站 ✨';
  } else if (route.view === 'post') {
    renderBlogPost(route.slug);
  } else if (route.view === 'home') {
    document.title = '少女の导航站 ✨ 我的小窝与博客';
  } else if (route.view === 'nest') {
    document.title = '我的小窝 · 少女の导航站 ✨';
  }

  // 关闭移动端菜单并回到顶部
  $('#nav-mobile-sheet').classList.remove('open');
  window.scrollTo(0, 0);
}

/* ---------- 全局交互 ---------- */
function initChrome() {
  // 滚动毛玻璃
  const header = $('#site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 移动端菜单
  $('#nav-toggle').addEventListener('click', () => {
    const sheet = $('#nav-mobile-sheet');
    const open = sheet.classList.toggle('open');
    $('#nav-toggle').setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
    $('#nav-toggle').setAttribute('aria-expanded', String(open));
  });

  // 锚点滚动（首页“探索导航”）
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('[data-anchor]');
    if (anchor) {
      e.preventDefault();
      const target = document.getElementById(anchor.dataset.anchor);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const dead = e.target.closest('[data-dead]');
    if (dead) e.preventDefault();
  });

  // 博客分类筛选（事件委托，列表按钮为动态渲染）
  $('#category-bar').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cat]');
    if (!btn) return;
    activeCategory = btn.dataset.cat || null;
    renderBlogList();
  });

  // 页脚年份
  $('#footer-year').textContent = new Date().getFullYear();
}

/* ---------- 初始化 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderDestinations();
  renderAlbum();
  renderQuickLinks();
  renderBlogTeaser();
  renderMessages();
  renderPlayer();
  initGuestbook();
  initMusic();
  initChrome();

  tickClock();
  setInterval(tickClock, 1000);

  window.addEventListener('hashchange', router);
  if (!location.hash) location.hash = '#/';
  router();
});
