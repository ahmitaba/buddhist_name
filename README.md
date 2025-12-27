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
2. 存進src/data/{日期註記}.js
3. 到App.vue，import它，並concat進原本的資料中
4. 截下當日的資料，上傳回Firebase

note: 不是用axois撈資料