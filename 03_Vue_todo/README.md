### 拆分组件
1. main.js主文件引入 Vue 和 app主组件且配置对象components组件添加app。
2. 根据项目需要添加header/list/item/footer子组件

### 拆分静态资源
1. 静态HTML页面全部拷贝到app主文件中。
2. 然后把header/list/footer组件引入到主组件中且配置对象components组件添加header/list/footer
  - header和footer由于是h5的标签. 会造成冲突. 可以定义新的标签来充当
  - `'todo_header': header`,  `<todo_header></todo_header>`
3. 把需要header/list/footer组件显示的html页面分别拷贝到各组件中。并在主组件里添加header/list/footer模版标签
4. 把各个CSS样式写入到各个组件里

### 初始化页面资源
1. app主组件里初始化列表信息 todos 数组 -> 包含对象 -> 对象里有title和complete属性
2. 把todos传送给list组件  `<list :todos="todos"></list>`
3. list组件通过props接收app的信息. 并引入item组件. v-for循环遍历todos 
  - `<item v-for="todo in todos" :todo="todo"></item>`
4. item组件通过props接收list的信息
  - 定义一个鼠标移入时的状态和鼠标移出时的 @mouseenter/@mouseleave. 并初始化style样式
  - 给按钮初始化显示为false. background初始化为 white
  - 鼠标的样式定义一个方法 传入true和false不同的参数
  - 当鼠标移入时, 显示删除按钮和背景色. 否则的话就是初始状态

### 头部交互
1. app主组件定义头部添加的方法. 并传递给head组件
  - `<todo_header :add-todo="addTodo"></todo_header>`
2. head子组件通过props接收主组件的添加方法
3. input双向数据绑定. 并指定点击enter键时的交互方法
4. 初始化双向数据绑定值. 并在methods里定义enter键时方法
  - 调用主组件的方法完成头部交互
 
### 底部交互
1. app主组件定义清除选中的方法. 并传递给footer组件 `removeCompleteTodos`
2. footer组件接收并在computed计算属性使用. 
  - 全部 按照todos的长度判断
  - 已完成的  通过filter过滤出新的数组 (只勾选的)  然后返回新数组的长度
  - 在methods里定义删除的方法. 调用主组件的方法
3. app主组件定义选中的方法. 并传递给footer组件 `check`
  - 数组遍历. forEach
4. 在计算属性中使用
  - get方法 得到当前全选按钮的状态. 通过filter过滤 (只未勾选的)
  - set方法 将全选按钮的状态同步到所有的todo里. 调用主组件的方法
