### 拆分组件
1. index.html引入bootstrap.css文件
2. main.js主文件引入 Vue 和 app主组件且配置对象components组件添加app。
3. 根据项目需要添加add/list/item副组件

### 拆分静态资源
1. 静态HTML页面全部拷贝到app主文件中。
2. 然后把add和list组件引入到主组件中且配置对象components组件添加add和list
2. 把需要add和list组件显示的html页面分别拷贝到各组件中。并在主组件里添加add/list模版标签
3. list组件中把需要的CSS样式拷贝到style标签中

### 初始化数据
1. 在add主组件的data里初始化显示的数据 （评论的内容）
2. 初始化的数据要显示在list组件里。 需要通过props进行传递
  - 定义属性名进行关联 `<list :comments="comments"></list>`
3. list 组件要接收数据并读取
  - 需要写一个配置选项： props
  - 可以写接收的属性名。也可定义接收属性的属性值类型
  - props里传进来的属性可以当做配置对象的data属性使用

### 动态显示页面 list/item组件交互
1. 暂无评论时进行display的隐藏操作
  - v-show通过数据的长度进行判断： 如果为0 则隐藏
2. 评论的内容在item组件里显示. 在list中引入item组件且配置对象components组件添加item
3. 添加item模版标签。 并v-for循环出所有评论内容
4. 把循环得到的数据结果通过传到item组件中使用显示 `<item v-for="comment in comments" :comment="comment"></item>`
5. item组件中通过props配置对象进行声明接收数据

### 添加功能实现 add组件动态交互
1. input标签进行双向数据绑定 v-model
2. 提交按钮绑定事件监听
3. data中初始化input绑定的数据对象 comment：｛｝
4. 在主组件的methods定义添加的事件监听。 并把行为传给子组件 <add :add="add"></add>
5. 在add子组件里通过props接收主组件的行为
6. add组件中进行数据交互操作
  - 得到输入的数据
  - 将得到的数据添加进数组中
  - 清空输入选项

### 删除功能实现
1. 删除的方法同样要定义在主组件中。 只传递行为给子组件
2. 方法定义好之后一层一层传到item组件中。 app -> list -> item
  - list的props需要接收删除的方法
  - item里也要接收该方法并给按钮绑定事件
3. item组件里使用传来的方法
  - 结构赋值得到props里的数据 `var {comment, deleteItem} = this`
  - if判断是否要删除
  - 调用删除方法传入数据参数
