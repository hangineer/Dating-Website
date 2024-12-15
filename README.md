# 宇你相遇 交友網站

![](fp_frontend/src/style/images/IMG_6204.gif "logo")

備註: 若看不到字體，是因 Logo 字體為白色，與背景融合所致

### 負責內容:

後端:

1. 註冊功能
2. 登入/登出功能
3. 會員專區的資料顯示以及修改

### 使用技術:

1. 使用 vue.js 將前端夥伴的 html 檔轉換成框架形式，以前後端分離進行開發
2. MySQL 建立會員資料表，搭配資料庫正規畫，所有的多筆資料都有另外分出 table 儲存
3. node.js + express + npm 建立後端環境
4. 使用 JWT 完成登入系統，在成功登入後，我們將 JWT 保存在 localStorage，能有效的管控 JWT 的生命，過期的就刪除

### 影片 Demo 及網站相關資訊(附上雲端連結)

[雲端連結](https://drive.google.com/drive/folders/1yol7xXzJXFqYeU3ykbdVIOz--MPFqC8w?usp=sharing)

### 啟動專案
後端
```shell
cd fp_backend
npm install
node app.js
```

前端
```shell
cd fp_frontend
npm install
npm run serve
```
### TODO
1. 整合夥伴的程式碼，將整個網站各頁面串聯起來
2. 更善用 Vue.js 的元件來進行溝通、資料傳遞
