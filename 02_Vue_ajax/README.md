### 拆分组件
1. index.html引入bootstrap.css文件
2. main.js主文件引入 Vue 和 app主组件且配置对象components组件添加app。
3. 引入发送ajax的文件 `import VueResource from 'vue-resource'`
3. 根据项目需要添加search/list子组件

### 拆分静态资源
1. 静态HTML页面全部拷贝到app主文件中。
2. 然后把search/list组件引入到主组件中且配置对象components组件添加add和list
2. 把需要search/list组件显示的html页面分别拷贝到各组件中。并在主组件里添加add/list模版标签
3. list组件中把需要的CSS样式拷贝到style标签中

### 初始化数据
1. 在add主组件的data里初始化 搜索姓名的数据为空 `searchName: ''`
2. 初始化的数据要显示在list组件里。 需要通过props进行传递
  - `<list :search-name="searchName"></list>` 注意大小写的切换
3. 初始化搜索的方法传给search组件. 
  - 传入的参数就是上面初始化搜索姓名的数据 `setSearchName`
  - `<search :set-search-name="setSearchName"></search>`
  
### 搜索交互 search组件
1. 在props接收从主组件传来的搜索方法
2. input表单双向数据绑定. 并在data里初始化为空 `name: ''`
3. 在按钮标签里定义组件内的搜索方法
  - 判断在空的时候不搜索
  - 调用主组件传来的方法 `setSearchName()`
  - 参数传入 input表单里双向数据绑定的值
  
### 显示交互
1. 一共有四个状态. 四个模版标签. 
  - 最开始显示的
  - 搜索时显示的
  - 错误时显示的
  - 成功收到数据时显示的
2. 初始化定义四个状态 
  - 最开始显示的  true
  - 搜索时显示的  false 
  - 错误时显示的  null 
  - 成功收到数据时显示的  null
3. props接收主组件传来的 搜索姓名 `searchName`
4. 计算属性computed里 进行监视searchName的变化. 一旦发生变化就发送ajax
  - 调用set (val){}
  - 当set调用时 更新状态. 
      - 最开始显示的  false
      - 搜索时显示的  true
  - 定义接口url文档. 所有的姓名就是val值
  - 用vue-resource发送ajax
    - 成功时 读取用户信息  `response.body.items`
    - map方法遍历得到 头像信息/login/页面地址
    - 错误时 接收错误信息  `response.statusText`
5. 在页面模版里添加信息 (v-for遍历用户的信息)
  - a链接里添加 页面地址信息
  - 图片标签里添加 头像信息
  - p标签里 添加  login
