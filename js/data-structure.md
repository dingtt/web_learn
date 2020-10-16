# 数据结构

## 数组

创建  

```javascript
const arr = [] 
const arr = new Array()
const arr1 = [1,1,1]
consr arr1 = (new Array(3)).fill(1)
```

方法

concat、some、

slice  

join、

sort、

pop、push shift unshift

splice(a, b, c)   a索引/b删除个数/c添加元素 splice(1, 1) 删除   splice(1, 0, 'add')  

遍历

for  forEach  

map 返回对每一项处理之后的全新数组

### 二维数组 

fill([]) 不能用了填充二位数组，fill参数是引用类型的话，填充的也是引用类型，所以实际上是一样的值，一改全改。所以需要用for循环，对每一项赋值数组。

```javascript
// 验证缓存数组长度的作用  影响比较小
var arr1 = (new Array(1000000)).fill(1)
var len1 = arr1.length // 缓存数组长度
var beginTime = Date.now()
for(var i = 0; i < len1; i++){
  if(i === (len1 - 1)){
   console.log('缓存了数组长度', Date.now() - beginTime)
  }
}
// 分别运行
var beginTime2 = Date.now()
for(var i = 0; i < arr1.length; i++){
  if(i === (len1 - 1)){
   console.log('未缓存数组长度', Date.now() - beginTime2)
  }
}
```

```javascript
// 验证数组嵌套顺序  数组长度的影响  短数组在外层更快
var arr1 = (new Array(10000)).fill(1)
var arr2 = (new Array(20000)).fill(2)
var len1 = arr1.length
var len2 = arr2.length
var beginTime = Date.now()
// 分别运行
for(var i = 0; i < len2; i++){
	for(var j = 0; j < len1; j++){
	  if(i === (len2 -1) && j === (len1 - 1)){
	    console.log('长数组在外层', Date.now() - beginTime)
	  }
	}
}
var beginTime2 = Date.now()
// 分别运行 或 beginTime2
for(var m = 0; m < len1; m++){
	for(var n = 0; n < len2; n++){
	  if(m === (len1 -1) && n === (len2 - 1)){
	    console.log('短数组在外层', Date.now() - beginTime2)
	  }
	}
}

```

### 栈

后进先出，只能从栈顶添加删除元素（相当于数组的push pop）

```javascript
// 取栈顶
const stack = []
stack.push('老冰棍')
stack.push('巧乐兹')
stack.push('小不丁')
while(stack.length){
  const stacktop = stack[stack.length - 1] // 栈顶值
  stack.pop() // 出栈
}

```

### 队列 —— 先进先出   只允许尾部添加，头部取出 (相当于数组的push shift)

```javascript
const queue = []
queue.push('队1')
queue.push('队2')
queue.push('队3')
while(queue.length){
  const top = queue[0] // 取队首
  queue.shift(0) // 出队
}
```

### 链表

链表的增加删除元素不用挪动其他多余的的元素   链表的添加删除复杂度O(1)

```
function ListNode(val) {
    this.val = val;
    this.next = null;
}
const node1 = new ListNode('1')
const node2 = new ListNode('2')
node1.next = node2
```

访问

```javascript
const index = 10
const node = head
for(var i = 0; i < index&&node; i ++){
  node = node.next
}
```

## 树

树的层次：从根节点到子节点，到叶子节点，这么算

节点和树的高度：叶子节点高度为1，每往上一层高度加一，直至目标节点，累加得到的高度即为目标节点的高度。 最大的节点高度，即为树的高度。

度：一个节点有几个子节点，即称为几度

叶子节点：最后一层的节点，度为0的节点，即是叶子节点

### 二叉树

### 空树

如果部署空树，必须由根节点 左子树 右子树构成，且左右子树都是二叉树。二叉树的左右子树是严格约定不饿能交换的。

```
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
const node  = new TreeNode(1)
```

### 二叉树遍历

先序遍历（递归遍历）

根结点 左子树 右子树

<img src="C:\Users\10189\AppData\Roaming\Typora\typora-user-images\image-20200629094640205.png" alt="image-20200629094640205" style="zoom:50%;" />

```
const root = {
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'D'
        },
        right: {
            val: 'E',
            left: {
                val: 'G',
                right: {
                    val: 'H'
                }
            }
        }
    },
    right: {
        val: 'C',
        left: {
            val: 'F'
        }
    }
}

// 递归边界
// 左序遍历
const preorder = function (node) {
    if (!node) return
    console.log('节点', node.val)
    preorder(node.left)
    preorder(node.right)
}
preorder(root)
// A B D E G H C F
// 先遍历左节点，左节点不为空就往下执行，右节点hold，直到某个节点N左节点为空，执行N的右节点，假如右节点也为空，则返回上层N-1的右节点
// 中序遍历（递归遍历）左子树  根结点  右子树
const preorderM = function(node){
    if(!node) return
    preorderM(node.left)
    console.log('节点M', node.val)
    preorderM(node.right)
}
preorderM(root)
// D B G H E A F C

// 后序遍历（递归遍历）
const preorderR = function(node){
    if(!node)return
    preorderR(node.left)
    preorderR(node.right)
    console.log('节点R', node.val)
}
preorderR(root)
// D H G E B F C A
// 层次遍历（迭代遍历）

```

左序遍历图

<img src="C:\Users\10189\AppData\Roaming\Typora\typora-user-images\image-20200629095254511.png" alt="image-20200629095254511" style="zoom:50%;" />



中序

<img src="C:\Users\10189\AppData\Roaming\Typora\typora-user-images\image-20200629100926203.png" alt="image-20200629100926203" style="zoom:50%;" />

## 时间复杂度和空间复杂度

<img src="https://user-gold-cdn.xitu.io/2020/4/6/1714f67c52dc8d15?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="img" style="zoom:80%;" />