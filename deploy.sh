# gino 自動部屬指令

# 當發生錯誤時終止腳本運行
set -e

# 建立輸出檔案
npm run build

# 移動至到打包後的dist目錄
cd dist

git init
git add -A
git commit -m 'deploy'

# 將 dist資料夾中的內容推送至遠端 hexWeek6Demo的 gh-pages分支中，並強制無條件將舊有的內容取代成目前的內容（指令 git push -f)
git push -f https://github.com/qscftyjm1234/red_house_project.git master:gh-pages
cd -

# 執行指令，在終端機輸入 deploy.sh123
