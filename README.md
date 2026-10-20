# buddhist_name

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### deploy

```bash
sh deploy.sh
```

### 資料備份流程速記

1. 從Firebase下載備份
2. 存進src/data/{日期註記}.json
3. 把JSON格式加工為js格式，含導出
4. 把副檔名改成.js
5. 到App.vue，import它，並concat進原本的資料中
6. 截下當日的資料，上傳回Firebase，覆蓋原資料

note: 不是用axois撈資料