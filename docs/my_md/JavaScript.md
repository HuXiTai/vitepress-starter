## JavaScript：
>`<script> </script>`

## 函数：
- 挂在在window对象的的一些常用的API
```js
alert("提示"); /* 浏览器弹出警示框 */
console.log("消息");	/* 浏览器控制台打印输出信息 */
console.dir(obj); /* 查看对象的属性和方法 */
prompt("提示信息", "默认值"); /* 浏览器弹出输入框，用户可以输入 */
confirm("单击'确定'继续，单击'取消'停止"); /* 浏览器弹出确认框 */
document.write("消息"); /* 把内容作为网页的内容进行展示 */
isNaN(x); /* 判断x是否为非数字，返回值为true或false */
```

## 属性：
```js
const str = "哈哈"
console.log(str.length) /* 返回字符串的长度，length就是str包装对象的属性 */
	
```
## 关键字
`if`：判断表达式

`else`：判断表达式

`switch`：选择语句

`case`：选择语句

`default`：选择语句

`do`：循环语句

`while`：循环语句

`for`：循环语句

`continue`：跳过本次循环

`break`：立即退出循环，强制执行循环后的语句

`in`：用来检测某个对象里是否存在某个属性

`with`：将代码的作用域设置到一个特定的作用域中

`delete`：删除对象中的某个属性

`throw`：抛出异常

`try`：捕获异常

`catch`：处理异常

`finally`：无论如何都会执行

`instanceof`：用来判断复杂数据类型	

`typeof`：用来判断基础数据类型	

`new`：实例化对象

`this`：通过构造函数实例化类时创建的新对象

`return`：函数返回值

`void`：无返回值

`debugger`：ECMAScript 5 新增，用于断点调试

`var`：定义变量

`const`：定义变量

`let`：定义变量

`function`：定义函数

## 流程控制：
### 顺序结构
- 从上往下依次执行代码

### 选择结构
`if else`
```js
const n = 1;
if (n === 1) {
  console.log("是的");
} else {
  console.log("不是");
};

/* 输出："是的" */
```

`switch`
```js
const n = 3;
switch (n) { 
  case 1: console.log("1"); break;
  case 2: console.log("2"); break;
  default: console.log("都不是");
};

/* 输出："都不是" */
```
### 循环结构
`for`
```js
for (i = 0; i < 5; i++) {
  console.log(i);
};

/* 输出：0 1 2 3 4 */
```

`while`
```js
let i = 0;
while (i < 5) {
  console.log(i++);
};

/* 输出：0 1 2 3 4 */
```

`do while`
```js
let i = 0;
do {
  console.log(i++);
} while (i < 5);

/* 输出：0 1 2 3 4 */
```
## 数据类型：
### 基本数据类型
`Number`
```js
const n = 123;
```
`String`
```js
const s = "哈哈";
```
`Boolean`
```js
const b = true;
```
`Undefined`
```js
const u - undefined;
```
`Null`
```js
const n = null;
```
`Symbol`
```js
const s = Symbol("哈哈");
```
`Bigint`
```js
const b = 1000000000n;
```

### 复杂数据类型
`Object`
```js
const obj = { a: 123, b: "哈哈" };
```
`Function`
```js
function Fn(a) {
  console.log(a);
}
```
`Array`
```js
const arr = [ 1, 2, 3 ];
```
`Math`
```js
console.log(Math.PI);
```
`Date`
```js
console.log(new Date);
```
`RegExp`
```js
const reg = /\d+/g;
```

## 转义字符：
`\b`：代表退格

`\t`：代表一个制表符,即一个Tab空格

`\n`：换行回车

`\v`：垂直的制表符

`\r`：回车

`\"`：双引号

`\'`：单引号

`\\`：反斜线，即"\"

`\OOO`：使用八进制表示的拉丁字母。OOO表示一个3位的八进制 整数,范围是000-377

`\xHH`：使用十六进制数表示的拉丁字母,HH表示一个2位的十六进制整数,范围是00-FF

`\uHHHH`：使用十六进行数(该数值指定该字符的Unicode值)表示的字符,HHHH表示一个4位的十六进制整数

## 运算符即优先级：
![img-023](/images/023.png)

## 栈和堆：
![img-024](/images/024.png)

![img-025](/images/025.png)

::: warning 注意
在Js里面数据都存在推内存里，分为栈结构和堆结构
:::

## 作用域：
全局作用域：用var和不用var申明的变量，关闭浏览器时释放

局部作用域：在函数里用var申明的变量，函数执行完时释放

::: warning 注意
Js中没有块级作用域（在ES6之前）
:::

## 执行环境和执行环境栈：
### 执行环境
全局环境（Global Context）

函数环境（Function Context）

Eval函数环境（Eval Context）

### 执行环境栈：
![img-026](/images/026.png)

::: warning 关于执行栈有5点需要记牢
1. 单线程
2. 同步执行
3. 只能有1个全局环境
4. 任意多个函数环境
5. 每次调用函数就会新建一个环境，即使函数调用自身也是如此
:::

## 函数传值：
![img-027](/images/027.png)

![img-028](/images/028.png)


## 作用域链：
![img-029](/images/029.png)

## 预解析：
- 变量提升和函数提升

代码执行分两步走：
1. 预解析(只对变量和函数处理，把带var的变量和函数的声明提前进行) 
2. 代码执行(一行一行地执行)

## 立即调用函数表达式IIFE：
### 格式
```js
(function () { /* 函数体 */ })();
(function () { /* 函数体 */ }());
```
### 作用
1. 防止变量名污染
1. 可用于项目初始化
1. 隐藏内部代码

## 函数的回调：
![img-030](/images/030.png)

## 函数的递归：
```js
function Fn(num) {
	if (num > 3) {
		return;
	}

	Fn(++num);

	console.log("第" + num + "次执行Fn");
}

Fn(0);

/* 
  打印：
  第4次执行Fn
  第3次执行Fn
  第2次执行Fn
  第1次执行Fn
*/
```

## 面向对象：
### 概念
属性：事物的特征，在对象中用属性来表示（常用名词）

方法：事物的行为，在对象中用方法来表示（常用动词）

### 创建对象的方式
字面量创建：
```js
const obj = {
  name: "胡",
  eat () {
    console.log("吃饭");
  };
}
```
内置构造函数创建：
```js
const obj = new Object();
obj.name = "胡";
obj.eat = function () {
  console.log("吃饭");
};
```
自定义构造函数创建：
```js
function Obj (name, eat) {
  this.name = name;
  this.eat = eat
}

function fn () {
  console.log("吃饭");
}

const obj = new Obj("吃饭", fn);
```

## 对象的增删改查：
### 查
```js
const obj = {
  name: "胡",
  eat () {
    console.log("吃饭");
  }
};

const attr = "name";

obj.name;
obj[attr];
obj.eat();
```

### 增/改
- 有则更改，无则增加
```js
const obj = { name: "胡" };

obj.name = "熙";
obj.eat = function () {
  console.log("吃饭");
};

console.log(obj); /* 打印：{name: '熙', eat: ƒ} */
```

### 删：
```js
const obj = {
  name: "胡",
  eat () {
    console.log("吃饭");
  }
};

const attr = "eat";

delete obj.name;
delete obj[attr];

console.log(obj); /* 打印：{} */
```

## 对象的遍历：
```js
const obj = { name: "胡", age: 24 };
const arr = [ 1, 2, 3 ];

for (let key in obj) {
  console.log(key) /* 打印：name age */
}

for (let val of arr) {
  console.log(val) /* 打印：1 2 3 */
}
```

## 构造函数：
### 和普通函数的区别
1. 调用方式不同：构造函数一般有new
2. 返回值不同：构造函数返回的是实例对象或复杂数据对象，普通函数返回的是返回值
3. this不同：构造函数是实例对象，普通函数是window

## this指向：
![img-031](/images/031.png)

## new：
1. 堆内存里开辟空间
2. this变量指向该内存
3. 执行函数的代码
4. 生成对象的实例并将空间的地址返回

```js
//Fun为构造函数, args表示传参
function myNew(Fun, ...args) {
    // 1.在内存中创建一个新对象
    let obj = {};
    
    // 2.把新对象的原型指针指向构造函数的原型属性
    obj.__proto__ = Fun.prototype;
    
    // 3.改变this指向，并且执行构造函数内部的代码（传参）
    let res = Fun.apply(obj, args);
    
    // 4.判断函数执行结果的类型
    if (res instanceof Object) {
        return res;
    } else {
        return obj;
    }
}

let obj = myNew(One, "胡", "25");
console.log("newObj:", obj);
```

## 原型对象：
显式原型对象：`Star.prototype`

隐式原型对象：`ldh.__proto__`

原型对象属性：`Star.prototype.constructor === Star`

原型链：

![img-032](/images/032.png)

## 改变函数内部this的指向：
- Function原型对象上的三个方法
`fn.call(a, b, c);`

功能：改变"fn"中的"this"指向。"nullish"为"window"，基本类型为包装对象，复杂类型为本身，并调用"fn"

参数："a"为参考的指向，"b、c、..."为调用fn时传递的实参

返回值：调用"fn"时的返回值

::: details 查看代码
```js
function fn(a, b) {
  console.log(this, a, b) /* 打印：{name: '胡'} '熙' '泰' */
  return (this)
};

const obj = { name: "胡" };

fn.call(obj, "熙", "泰"); /* 返回：{name: '胡'} */
```
:::

::: details 查看原生手写
```js
/* 
  1:在Function的原型添加一个newCall方法，传一个context参数
  2:判断参数:
    参数为空、null、undefined、window-->this指向window
    基本数据类型-->this指向包装对象
    对象-->this指向该对象
  3:获得其他的参数:var args =
  4:取一个防重名的名字key
  5:context[key] = this
  6:执行其他的参数
  delete context[key]; 
*/

Function.prototype.newCall = function(context) {
	if (context == null || context == undefined || context == window) {
		context = window;
	} else if (typeof context != "object" && typeof context != "function") {
		context = Object(context);
	}
	var args = Array.from(arguments).slice(1).toString(); //3,4
	var key = Date.now().toString(36);
	context[key] = this;
	eval("context[key](" + args + ")");
	delete context[key];
}

function fn(a, b) {
	console.dir(this);
	console.log(a + b);
}

fn.newCall([1, 2], 3, 4);
```
:::

`fn.apply(a, [ b, c ])`

功能：同call

参数："a"为参考的指向，"[ b、c、... ]"为数组,调用fn时传递的实参

返回值：同call
::: details 查看代码
```js
function fn(a, b) {
  console.log(this, a, b) /* 打印：{name: '胡'} '熙' '泰' */
  return (this)
};

const obj = { name: "胡" };

fn.apply(obj, [ "熙", "泰" ]); /* 返回：{name: '胡'} */
```
:::

::: details 查看原生手写
```js
Function.prototype.myApply = function(context) {
	if (context == null || context == undefined || context == window) {
		context = window;
	} else if (typeof context != "object" && typeof context != "function") {
		context = Object(context);
	}
	Array.from(arguments);
	var args = arguments[1].join(",");
	var key = Date.now().toString(36);
	context[key] = this;
	eval("context[key](" + args + ")");
	delete context[key];
}

function fn(a, b) {
	console.dir(this);
	console.log(a + b);
}

fn.myApply([1, 2], [3, 4]);
```
:::

`fn.bind(a)`

功能：同call

参数："a"为参考的指向

返回值：被修改this后的fn
::: details 查看代码
```js
function fn(a, b) {
  console.log(this, a, b) /* 打印：{name: '胡'} '熙' '泰' */
  return (this)
};

const obj = { name: "胡" };

const newFn = fn.bind(obj); /* 返回：被修改this后的fn */
newFn("熙", "泰"); /* 返回：{name: '胡'} */
```
:::

::: details 查看原生手写
```js
Function.prototype.myBind = function(context) {
	var context = context || window;
	var self = this;
	return function() {
		return self.myApply(context);
	};
};

var getFn = fn.myBind(obj);
console.log(getFn());
```
:::

## 内置对象：
### `JSON`
- 轻量级的数据交换格式，可以用来深拷贝但是值为非基本类型和非数组对象时不能使用
```js
const obj = { name: "胡" };
const jsonStr = JSON.stringify(obj); /* 返回："{name: 胡}" */
const jsonObj = JSON.parse(jsonStr) /* 返回：{name: '胡'} */
```
### `Math`
```js
const n = 3.1415

Math.PI; /* 圆周率 */
Math.ceil(n); /* 向上取整 */
Math.floor(n); /* 向下取整 */
Math.trunc(n); /* 方法会将数字的小数部分去掉， 只保留整数部分 */
Math.round(n);	/* 四舍五入版 就近取整 注意 -3.5 结果是 -3 */
Math.abs(n); /* 绝对值 */
Math.max(3, 2, 3, 4, 5); /* 求最大 */
Math.min(3, 2, 3, 4, 5); /* 最小值 */
Math.random(n); /* 获取范围在[0,1)内的随机值 */
Math.pow(n); /* 幂运算 */
Math.sin(n); /* 正弦运算 */
Math.sign(n); /* 判断一个数,正数(返回1)负数(返回-1) 0(返回0) NaN(返回NaN) */
Math.sqrt(n); /* 平方根 */
Math.cbrt(n); /* 立方根 */
Math.hypot(n); /* 求所有参数平方和的平方根(勾股定理) */
```

### `Date`
```js
const date = new Date();

date.getFullYear(); /* 年 */
date.getMonth() + 1; /* 月 */
date.getDate(); /* 日 */
date.getDay(); /* 星期 */
date.getHours(); /* 时 */
date.getMinutes(); /* 分 */
date.getSeconds(); /* 秒 */
date.getMilliseconds(); /* 毫秒 */	

/* 获取时间戳 */
date.getTime();
date.valueOf();
Date.now();
+new Date();

/* 本地格式化字符串 */
date.toLocaleTimeString();
date.toLocaleDateString();
```
### 包装对象
```js
n = new Number("100");
s = new String(123);
b = new Boolean(true);
```

## Number对象的静态方法:
```js
Number.parseInt("123"); /* 返回：123 */
Number.isFinite(Infinity); /* 判断是否是有限大的数，返回：false */
Number.isNaN(NaN); /* 返回：NaN */
Number.isInteger(3.14); /* 判断是否是整数，返回：false */

const n = 3.14;
n.toFixed(1); /* 截取小数点后n位，返回：3.1 */
```

## Object对象的静态方法：
```js
const a = { name: "胡" };
const b = { age: 18 };

Object.assign(a, b); /* 将a拼接到b上，返回：{name: '胡', age: 18} */
Obejct.is(NaN, NaN); /* 判断两个对象是否相等, 修复了NaN不等NaN的问题，返回true */
Object.freeze(b); /* 冻结原对象，对象变成了只读，返回原对象引用 */
Object.seal(b); /* 封闭原对象，返回原对象引用，不能增删，但是能改查 */
Object.hasOwn(b, "age"); /* 只检测自有属性，返回：true */
```

## Objec对象原型对象上的方法：
```js
const obj = { name: "胡", age: 18 };
Object.hasOwnProperty(name); /* 只检测自有属性，返回true */
Object.entries(obj); /* 分别用来获取键值对组成的迭代器对象，返回：[['name', '胡'], ['age', 18]] */
Object.keys(obj); /* 所有的key组成的迭代器对象，返回：["name", "age"] */
Object.values(obj); /* 所有的值组成的迭代器对象，返回：['胡', 18] */
```

## 字符串对象：
`str.indexOf(str[, index])`：从前往后查找str从index开始
::: details 查看用法
```js
const str = "abcde";

str.indexOf("d", 1); /* 返回：3 */
```
:::

`str.lastIndexOf(str[, index])`：从后往前查找s1从index开始
::: details 查看用法
```js
const str = "abcde";

str.lastIndexOf("d", 1); /* 返回：-1 */
```
:::

`str.charAt(index)`：查找索引为idnex的元素
::: details 查看用法
```js
const str = "abcde";

str.charAt(1); /* 返回：'b'' */
```
:::

`str.charCodeAt(index)`：查找索引为idnex的元素返回值为ASCLL
::: details 查看用法
```js
const str = "abcde";

str.charCodeAt(1); /* 返回：98 */
```
:::

`str[index]`：查找索引为idnex的元素，h5新增方法
::: details 查看用法
```js
const str = "abcde";

str[1]; /* 返回：'b' */
```
:::

`str.concat(s1[, s2, ...])`：拼接字符串
::: details 查看用法
```js
const str = "abcde"; /* 不修改原字符串 */
const s1 = "f";
const s2 = "g";

str.concat(s1, s2); /* 返回：'abcdefg' */
```
:::

`String.fromCharCode(unicode[, ...])`：ASCII码对应的字符组成的字符串
::: details 查看用法
```js
String.fromCharCode(97, 98, 100); /* 返回：'abd' */
```
:::

`str.trim()`：去字符串的前后空格
::: details 查看用法
```js
const str = " abcde "; /* 不修改原字符串 */

str.trim(); /* 返回：'abcde' */
```
:::

`str.trimEnd()`：去字符串的后空格
::: details 查看用法
```js
const str = " abcde "; /* 不修改原字符串 */

str.trimEnd(); /* 返回：' abcde' */
```
:::

`str.trimStart()`：去字符串的前空格
::: details 查看用法
```js
const str = " abcde "; /* 不修改原字符串 */

str.trimStart(); /* 返回：'abcde ' */
```
:::

`str.endsWith(s)`：判断字符串末尾否包含某个字符
::: details 查看用法
```js
const str = "abcde";
const s = "e"

str.endsWith(s); /* 返回：true */
```
:::

`str.startsWith(s)`：判断字符串开头否包含某个字符
::: details 查看用法
```js
const str = "abcde";
const s = "a"

str.startsWith(s); /* 返回：true */
```
:::

`str.padStart(n, s)`：当字符串不够某个长度的时候，在前边补规定的字符
::: details 查看用法
```js
const str = "abcde";

str.padStart(6, "*"); /* 返回：'*abcde' */
```
:::

`str.padEnd(n, s)`：当字符串不够某个长度的时候，在后边补规定的字符
::: details 查看用法
```js
const str = "abcde";

str.padEnd(6, "*"); /* 返回：'abcde*' */
```
:::

`str.replace(reg || s1, s2)`：找到reg或s1替换成s2
::: details 查看用法
```js
const str = "abcde"; /* 不修改原字符串 */

str.replace("c", "*"); /* 返回：'ab*de' */
str.replace(/^a/, "*"); /* 返回：'*bcde' */
```
:::

`str.localeCompare(s)`：用字符的 Unicode 编码比较字符串，返回值1、-1、0
::: details 查看用法
```js
const str = "a";
const s1 = "b";
const s2 = "a";

/* 
  str < s 则返回-1
  str > s 则返回1
  str = s 则返回0
*/

str.localeCompare(s1); /* 返回：-1 */
s1.localeCompare(str); /* 返回：1 */
str.localeCompare(s2); /* 返回：0 */
```
:::

`str.slice(start[, end])`：截取 [ start, end )
::: details 查看用法
```js
const str = "abcde"; /* 不修改原字符串 */

str.slice(1, 2); /* 返回：'b' */
```
:::

`str.split(s[, n])`：切割
::: details 查看用法
```js
const str = "a-b-c-d-e"; /* 不修改原字符串 */

str.split("-", 3); /* 返回：['a', 'b', 'c'] */
```
:::

`str.substr(start[, length])`：start表示从哪开始截取，length表示截取的长度s.substring(start, end) //类似于slice，区别是不支持负数 
::: details 查看用法
```js
const str = "abcde"; /* 不修改原字符串 */

str.substr(1, 3); /* 返回：'bcd' */
```
:::

`str.toLowerCase()`：转换为小写，返回新字符串 
::: details 查看用法
```js
const str = "ABCDE"; /* 不修改原字符串 */

str.toLowerCase(); /* 返回：'abcde' */
```
:::

`str.toUpperCase()`：转换为大写，返回新字符串 
::: details 查看用法
```js
const str = "abcde"; /* 不修改原字符串 */

str.toUpperCase(); /* 返回：'ABCDE' */
```
:::

`str.valueOf()`：有PrimitiveValue就返回它的值；没有则返回对象本身
::: details 查看用法
```js
// Array：返回数组对象本身
const array = ["ABC", true, 12, -5];
console.log(array.valueOf() === array);   // true

// Date：当前时间距1970年1月1日午夜的毫秒数
// Sun Aug 18 2013 23:11:59 GMT+0800 (中国标准时间)
const date = new Date(2013, 7, 18, 23, 11, 59, 230); 
console.log(date.valueOf());   // 1376838719230

// Number：返回数字值
const num =  15.26540; // 15.2654
num.valueOf() // 15.2654
console.log(num.valueOf() === num);   // true

// 布尔：返回布尔值true或false
const bool = true;
console.log(bool.valueOf() === bool);   // true

// new一个Boolean对象
const newBool = new Boolean(true); // Boolean {true}
newBool.valueOf() // true
// valueOf()返回的是true，两者的值相等
console.log(newBool.valueOf() == newBool);   // true
// 但是不全等，两者类型不相等，前者是boolean类型，后者是object类型
console.log(newBool.valueOf() === newBool);   // false


// Function：返回函数本身
function foo(){}
console.log( foo.valueOf() === foo );   // true

const foo2 =  new Function("x", "y", "return x + y;");
console.log( foo2.valueOf() === foo2); // true
/*
ƒ anonymous(x,y) {
return x + y;
}
*/

// Object：返回对象本身
const obj = {name: "张三", age: 18};
console.log( obj.valueOf() === obj );   // true

// String：返回字符串值
const str = "http://www.xyz.com";
console.log( str.valueOf() === str );   // true

// new一个字符串对象
// String {"http://www.xyz.com"}
const str2 = new String("http://www.xyz.com"); 
str2.valueOf() // "http://www.xyz.com"
// 两者的值相等，但不全等，因为类型不同，前者为string类型，后者为object类型
console.log( str2.valueOf() === str2 );   // false

```
:::

`str.toString()`：把一个n换为字符串
::: details 查看用法
```js
const num = 123; /* 不修改原字符串 */

num.toString(); /* 返回：'123' */
```
:::

`str.includes()`：判断是否包含指定的字符串
::: details 查看用法
```js
const str = "abcde";

str.includes("c"); /* 返回：true */
```
:::

`str.startsWith()`：判断是否以指定的字符串开头
::: details 查看用法
```js
const str = "abcde";

str.startsWith("a"); /* 返回：true */
```
:::

`str.endsWith()`：判断是否以指定字符串结尾
::: details 查看用法
```js
const str = "abcde";

str.endsWith("e"); /* 返回：true */
```
:::

`str.repeat(n)`：将字符串str重复n次返回
::: details 查看用法
```js
const str = "abcde"; /* 不修改原字符串 */

str.repeat(3); /* 返回：'abcdeabcdeabcde' */
```
:::

`str.match(ref || s)`：找到一个或多个与子串或正则表达式的匹配，返回数组
::: details 查看用法
```js
const str = "aabb";

str.match('b'); /* 返回：['b', index: 2, input: 'aabb', groups: undefined] */
str.match(/b/g); /* 返回：['b', 'b'] */
```
:::

`str.search(ref || s)`：在字符串里查找正则能匹配的第一个子串并返回索引
::: details 查看用法
```js
const str = "aabb";

str.search('b'); /* 返回：2 */
str.search(/b/); /* 返回：2 */
```
:::

`str.replace(ref || s)`：替换一个或多个与子串或正则表达式匹配的子串
::: details 查看用法
```js
const str = "aabb";

str.replace('b', "**"); /* 返回：'aa**b' */
str.replace(/b/g, "**"); /* 返回：'aa****' */
```
:::

## 数组对象：
### ES5的方法
`Array.isArray(arr)`
- 功能：判断arr是否是一个数组
- 参数：[1]为一个数据
- 返回值：布尔值

::: details 查看用法
```js
const arr = [ 1, 2 ];

Array.isArray(arr); /* 返回：true */
```
:::

`Array.from(pArr)`
- 功能：将伪数组或可遍历对象转换为真数组
- 参数：[1]伪数组
- 返回值：将为数组转换后的真数组

::: details 查看用法
```js
const str = "aabb";

const pArr = str.match('b');

Array.from(pArr); /* 返回：['b'] */
```
:::

`Array.of(d1, d2[, ...])`
- 功能：将一系列值转为数组，解决了new Array()传一个数即长度的问题
- 参数：[n]为需转成数组每项的数据
- 返回值：一个转换后的伪数组

::: details 查看用法
```js
Array.of("a", 1, { name: "胡" }); /* 返回：['a', 1, {name: '胡'}] */
```
:::

`arr.includes(data)`
- 功能：判断数组arr里是否包含data，需匹配类型
- 参数：[1]为一个数据
- 返回值：布尔值

::: details 查看用法
```js
const arr = [ "a", "b" ];

arr.includes("a"); /* 返回：true */
```
:::

`arr.at(index)`
- 功能：和arr[index]类似 但是可以倒着查找，最后一个为-1
- 参数：[1]为一个数字或数字字符串
- 返回值：返回对应下标的值，找不到时返回undefined

::: details 查看用法
```js
const arr = [ "a", "b", "c" ];

arr.at(1); /* 返回：'b' */
arr.at(-1); /* 返回：'c' */
```
:::

`arr.push(d1, d2[, ...])`
- 功能：改变原数组，在其后面依次添加其传递的参数(arr + d1 + d2)
- 参数：[n]为其添加的数据
- 返回值：为数组长度

::: details 查看用法
```js
const arr = [ "a", "b", "c" ];

arr.push("d"); /* 返回：4 */

console.log(arr); /* ['a', 'b', 'c', 'd'] */
```
:::

`arr.unshift(d1, d2[, ...])`
- 功能：改变原数组，在其前面依次添加其传递的参数(d1 + d2 + arr)
- 参数：[n]为其添加的数据
- 返回值：为数组长度

::: details 查看用法
```js
const arr = [ "b", "c" ];

arr.unshift("a"); /* 返回：3 */

console.log(arr); /* ['a', 'b', 'c' ] */
```
:::

`arr.pop()`
- 功能：改变原数组，删除其最后的一个值
- 参数：[0]无论有啥参数都是一个功能
- 返回值：返回被删除的这个值

::: details 查看用法
```js
const arr = [ "a", "b", "c" ];

arr.pop(); /* 返回：'c' */

console.log(arr) /* ['a', 'b' ] */
```
:::

`arr.shift()`
- 功能：改变原数组，删除其最前的一个值
- 参数：[0]无论有啥参数都是一个功能
- 返回值：返回被删除的这个值

::: details 查看用法
```js
const arr = [ "a", "b", "c" ];

arr.shift(); /* 返回：'a' */

console.log(arr) /* ['b', 'c' ] */
```
:::

`arr.reverse()`
- 功能：改变原数组，对其进行翻转
- 参数：[0]无论有啥参数都是一个功能
- 返回值：返回原数组(被翻转)

::: details 查看用法
```js
const arr = [ "a", "b", "c" ];

arr.reverse(); /* 返回：['c', 'b', 'a'] */

console.log(arr) /* ['c', 'b', 'a'] */
```
:::

`arr.sort((a, b) => number)`
- 功能：改变原数组，对其进行翻转
- 参数：[0]无论有啥参数都是一个功能
- 返回值：返回原数组(被翻转)

::: details 查看用法
```js
const arr = [ 2, 1, 3 ];

arr.sort((a, b) => {
  return a - b;
}); /* 返回：[1, 2, 3] */


arr.sort((a, b) => {
  return b - a;
}); /* 返回：[3, 2, 1] */

console.log(arr) /* [3, 2, 1] */
```
:::

`arr.indexOf(s[, index])`
- 功能：通过值或连同下标从前往后查找想要的值
- 参数：[2]s：寻找arr中是否有s1，index：从第几个开始查找，可负数
- 返回值：返回其第一个找到值的下标，没找到返回-1

::: details 查看用法
```js
const arr = [ "a", "b", "c" ];

arr.indexOf("b", 1); /* 返回：1 */
```
:::

`arr.lastIndexOf(s[, index])`
- 功能：通过值或连同下标从后往前查找想要的值
- 参数：同indexOf
- 返回值：返回其从后往前第一个找到值的下标，没找到返回-1

::: details 查看用法
```js
const arr = [ "a", "b", "c" ];

arr.indexOf("b", 2); /* 返回：-1 */
```
:::

`arr.join(s)`
- 功能：不变原数组，将数组转换成一个去掉“[ ]“的字符串
- 参数：[1]为每个值中间的连接符，且会被toString以下，默认为逗号
- 返回值：为一个被转换后的字符串

::: details 查看用法
```js
const arr = [ "a", "b", "c" ];

arr.join("-"); /* 返回：'a-b-c' */

console.log(arr) /* ['c', 'b', 'a'] */
```
:::

`arr.concat(d1, d2[, ...])`
- 功能：不变原数组，将其参数合并到arr上
- 参数：[n]为数据，每一个数据都会合并到arr上，数组是展开后合并
- 返回值：为被合并后的数组

::: details 查看用法
```js
const arr = [ "a", "b", "c" ];

arr.concat({ name: "胡" }); /* 返回：['a', 'b', 'c', {name: '胡'}] */
arr.concat([ 1, 2, 3 ],[ 4, 5, 6 ]); /* 返回：['a', 'b', 'c', 1, 2, 3, 4, 5, 6] */

console.log(arr) /* ['c', 'b', 'a'] */
```
:::

`arr.slice(i1[, i2])`
- 功能：不变原数组，切片[index1- index2)的值(包头不包尾)
- 参数：[2]开始的下标和结束的下标
- 返回值：为被切片的数组，下标不对应时返回空数组

::: details 查看用法
```js
const arr = ['a', 'b', 'c', 1, 2, 3, 4, 5, 6];

arr.slice(2, 5); /* 返回：['c', 1, 2] */

console.log(arr) /* ['a', 'b', 'c', 1, 2, 3, 4, 5, 6] */
```
:::

`arr.splice(index[, num][, d1, d2, ...])`
- 功能：改变原数组，从index删除num个值(含自己)，并添加d1,d2...
- 参数：[3]index：下标(不规范时删除所有)，num：个数，之后是添加的数据
- 返回值：被删除的值组成的数组，下标不规范时返回全部

::: details 查看用法
```js
const arr = [ "a", "b", "c" ];

arr.splice(0, 2, "*", "-"); /* 返回：['a', 'b'] */

console.log(arr) /* ['*', '-', 'c'] */

arr.splice(0, 2, ["*", "-"]);

console.log(arr) /* [['*', '-'], 'c'] */
```
:::

`arr.fill(data[, indexS][, indexE])`
- 功能：改变原数组，将str填充到arr中, 从indexS开始indexE结束(包头不包尾)
- 参数：[3]str：填充的数据，indexS：开始的下标，indexE：结束的下标
- 返回值：原数组(填充后)

::: details 查看用法
```js
const arr = [ "a", "b", "c" ];

arr.fill("*", 1, 2); /* 返回：['a', '*', 'c'] */

console.log(arr) /* ['a', '*', 'c'] */
```
:::

`arr.flat(n)`
- 功能：不变原数组，降维打击
- 参数：[1]多少维度被打击，一般写一各Infinity
- 返回值：被打击后的数组

::: details 查看用法
```js
const arr = [ "a", [ "b", [ "c" ] ] ];

arr.flat(1); /* 返回：['a', 'b', [ 'c' ]] */

arr.flat(Infinity); /* 返回：['a', 'b', 'c'] */

console.log(arr) /* [ 'a', [ 'b', [ 'c' ] ] ] */
```
:::

`arr.forEach((item, index, arr) => void)`
- 功能：对arr进行遍历
- 参数：[1]一个回调函数，回调接收参数：item：arr每项，index：arr每项下标，arr：被遍历数组
- 返回值：undefined

::: details 查看用法
```js
const arr = [ "a", "b", "c" ];

arr.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

/* 
打印：
a 0 ['a', 'b', 'c']
b 1 ['a', 'b', 'c']
c 2 ['a', 'b', 'c']
*/
```
:::

`arr.map((item, index, arr) => any)`
- 功能：没变原数组，对数组的每一项进行操作，映射出一个新值
- 参数：同forEach
- 返回值：为对每一项操作后映射的新数组

::: details 查看用法
```js
const arr = [ { name: "a" }, { name: "b" }, { name: "c" } ];

const newArr = arr.map((item, index, arr) => {
  return {
    label: item.name,
    index,
  }
});

console.log(newArr);

/* 
打印：
[
    {
        "label": "a",
        "index": 0
    },
    {
        "label": "b",
        "index": 1
    },
    {
        "label": "c",
        "index": 2
    }
]
*/
```
:::

`arr.some((item, index, arr) => any)`
- 功能：遍历数组判断每一项，一真即真
- 参数：同forEach
- 返回值：布尔值，return后的判断只要为真就返回true，否则false
::: details 查看用法
```js
const arr = [ "a", "b", "c" ];

const includingB = arr.some((item, index, arr) => {
  return item === "b"
});

console.log(includingB); /* 打印：true */
```
:::

`arr.every((item, index, arr) => any)`
- 功能：遍历数组判断每一项，一假即假
- 参数：同forEach
- 返回值：布尔值，return后的判断全部为真就返回true，否则false
::: details 查看用法
```js
const arr = [ true, false, true ];

const isAllTrue = arr.every((item, index, arr) => {
  return item
});

console.log(isAllTrue); /* 打印：false */
```
:::

`arr.filter((item, index, arr) => any)`
- 功能：不变原数组，遍历数组对每项进行判断过滤，当return后为true则保留该项，否则删除
- 参数：同forEach
- 返回值：为所有符合条件被筛选出来的值组成的数组
::: details 查看用法
```js
const arr = [ { name: "a" }, { name: "b" }, { name: "c" } ];
const newArr = arr.filter((item, index, arr) => {
  return item.name === "b";
});

console.log(newArr); /* 打印：[ {name: 'b'} ] */
```
:::

`arr.reduce((prev, item, index, arr, value) => {}[, p])`
- 功能：万物皆可reduce，一般常用于累计
- 参数1：上一次回调函数的返回值（第一次是初始值）prev
- 参数2：本次的数组元素item
- 参数3：本次数组元素的下标index
- 参数4：原数组的引用
- 参数p：累加的初始值（如果没有，默认是数组的第一个值）
- 返回值：返回累加后的值（最后一次回调函数返回的值）
::: details 查看用法
```js
const arr = [ 1, 2, 3, 4, 5 ];
const newData = arr.reduce((prev, item, index, arr) => {
  return item + prev; 
}, 0);

console.log(newData); /* 打印：15 */
```
:::

### ES6的方法
`arr.find((item, index, arr) => any)`
- 功能：遍历数组根据判断对其值进行查找，找到第一个后停止
- 参数：同forEach
- 返回值：第一个满足条件的item项
::: details 查看用法
```js
const arr = [ { name: "a" }, { name: "b" }, { name: "c" } ];
const newArr = arr.find((item, index, arr) => {
  return item.name === "b";
});

console.log(newArr); /* 打印：[ {name: 'b'} ] */
```
:::

`arr.findIndex((item, index, arr) => any)`
- 功能：同find
- 参数：同forEach
- 返回值：第一个满足条件的item的下标
::: details 查看用法
```js
const arr = [ { name: "a" }, { name: "b" }, { name: "c" } ];
const newArr = arr.findIndex((item, index, arr) => {
  return item.name === "b";
});

console.log(newArr); /* 打印：1 */
```
:::


## 正则表达式： 
- 匹配字符串
### 创建方式
```js
const rg = /123/;
const regexp = new RegExp(/123/);
```

### 测试正则表达式
`rg.test(str)`：匹配成功返回true，不成功返回false
```js
const str = "abc";
const rg = /^a/;

console.log(rg.test(str)); /* 打印：true */

var regexp = new RegExp(/123/);
```
`rg.exec(str)`：匹配成功结果以数组形式返回；匹配不成功返回null
```js
const str = "abc";
const rg = /^a/;

console.log(rg.exec(str)); /* 打印：['a', index: 0, input: 'abc', groups: undefined] */
```

### 正则表达式中的特殊字符
`^`：表示匹配行首的文本（以谁开始）

`$`：表示匹配行尾的文本（以谁结束）

`[]`：方括号中的字符只要匹配其中一个就可以了

`*`：重复0次或更多次

`+`：重复1次或更多次

`?`：重复0次或1次

`{n}`：重复n次

`{n,}`：重复n次或更多次

`{n,m}`：重复n到m次

`\d`：匹配0-9之间的任一数字，相当于`[0-9]`

`\D`：匹配所有0-9以外的字符，相当于`[^0-9]`

`\w`：匹配任意的字母、数字和下划线，相当于`[A-Za-z0-9_]`

`\W`：除所有字母、数字、下划线以外的字符，相当于`[^A-ZA-Z0-9_]`

`\s`：匹配空格（包括换行符、制表符、空格符等），相当于`[\t\r\n\v\f]`

`\S`：匹配非空格的字符，相当于`[^\t\r\n\v\f]`

`.`：匹配除`\n`和`\r`以外的任意字符，如果需要只匹配点`.`，需要在正则里用转义字符`\.`替代

`|`：满足两个条件其中一个

`()`：表示优先级，还有分组功能，`对象.groups.属性`

`i`：执行对大小写不敏感的匹配

`g`：执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）

`m`：执行多行匹配，字符串中有`\n`，一般和^或$配合使用，多行匹配时还要加上`g`修饰符


## DOM：
### 获取元素
```html
<div id="001" class="box"></div>
```
```js
document.getElementById("001"); /* 返回对象 */
document.getElementsByTagName('div'); /* 返回伪数组 */
document.getElementsByClassName('box'); /* 返回伪数组 */
document.querySelector(".box"); /* 返回对象 */
document.querySelectorAll(".box"); /* 返回伪数组 */
document.body; /* 获取body对象 */
document.documentElement; /* 获取html对象 */
```

### 事件
三要素：
1. 事件源
2. 事件类型
3. 事件处理函数

常用事件类型：

`onclick`：鼠标点击左键触发

`onmouseover`：鼠标经过触发

`onmouseout`：鼠标离开触发

`onfocus`：获得鼠标焦点触发

`onblur`：失去鼠标焦点触发

`onmousemove`：鼠标移动触发

`onmouseup`：鼠标弹起触发

`onmousedown`：鼠标按下触发

`onmouseenter`：进入盒子的时候执行一次

`onmouseleave`：离开盒子的时候执行一次

设置元素内容：
```html
<div></div>
```
```js
const oDiv = document.querySelector("div");

oDiv.innerHTML = "<p>哈哈哈</p>"
oDiv.innerText = "哈哈哈"
```

设置元素属性：`元素对象.属性名 = 值`

## 属性的增删改查：
### 查找属性
```html
<div class="box" id="001" h4="胡" data-h5="熙"></div>
```
```js
const oDiv = document.querySelector("div");

/* H4 */
console.log(oDiv.className) /* 打印：'box' */
console.log(oDiv.id) /* 打印：'001' */
console.log(oDiv.getAttribute("h4")) /* 自定义属性只能通过该方法，打印：胡 */

/* H5 */
console.log(oDiv.dataset.h5) /* ie11+，打印：熙 */
console.log(oDiv.getAttribute("data-h5")) /* 打印：熙 */
```

### 增改属性
```html
<div></div>
```
```js
const oDiv = document.querySelector("div");

oDiv.className = "box";
oDiv.setAttribute("custom", "胡"); /* 自定义属性只能通过该方法 */
```

### 删除属性：
```html
<div class="box"></div>
```
```js
const oDiv = document.querySelector("div");

oDiv.removeAttribute("class");
```

### node.classList属性
- DOMTokenList对象，记录着所有的class
```html
<div class="box"></div>
```
```js
const oDiv = document.querySelector("div");

oDiv.classList.add("title"); /* 添加一个类名 */
oDiv.classList.remove("title"); /* 删除一个类名 */
oDiv.classList.contains("box"); /* 判断是否包含某个类型，返回：true */
oDiv.classList.toggle("title"); /* 开关：如果拥有某个类，则删除，反知添加 */
```

### node.dataset属性
- DOMStringMap对象，记录着所有属性，可以对自定义属性增删改查

### HTMLConllection对象
- 是动态的，当伪数组发生变化的时候，集合的内容也会随之改变

### NodeList对象
- 是静态的，无论将来获取的元素发生怎样的改变，都不会影响集合的内容

## 节点操作：
元素节点：`nodeType: 1    nodeName:"DIV"   nodeValue: null`

属性节点：`nodeType: 2    nodeName:"id"  nodeValue: "d1"`

文本节点：`nodeType: 3    nodeName:"#text"   nodeValue: 文本内容`

注释节点：`nodeType: 8    nodeName:"#comment"  nodeValue: 注释内容`

### 查找
```html
<ul>
  <li class="li1"></li>
  <li class="li2"></li>
  <li class="li3"></li>
</ul>
```
```js
const oUl = document.querySelector("ul");
const oLi2 = document.querySelector(".li2");

oLi2.parentNode; /* 查找父节点 */
oLi2.nextSibling; /* 下一个兄弟节点 */
oLi2.previousSibling; /* 上一个兄弟节点 */
oLi2.nextElementSibling; /* 下一个兄弟元素节点 */
oLi2.previousElementSibling; /* 上一个兄弟元素节点 */

oUl.childNodes; /* 返回所有子节点, NodeList对象 */
oUl.children; /* 返回所有子元素节点，HTMLCollection对象 */
oUl.firstChild; /* 返回第一个子节点 */
oUl.lastChild; /* 返回最后一个子节点 */
oUl.firstElementChild; /* 返回第一个元素子节点 */
oUl.firstClastElementChildhild; /* 返回最后一个元素子节点 */
```

### 增改
```html
<div>
  <p></p>
</div>
```
```js
const oDiv = document.querySelector("div");
const oP = document.querySelector("p");

const oH1 = document.createElement("h1"); /* 创建节点 */

oDiv.appendChild(oH1); /* 添加节点，将节点添加到父节点下最后一个 */
oDiv.insertBefore(oH1, oP); /* 添加节点，将节点添加到参照节点前一个 */

oDiv.cloneNode(); /* 浅拷贝，返回复制的节点 */
oDiv.cloneNode(true); /* 深拷贝，返回复制该节点以及下面所有节点 */
```

### 删除
```html
<div>
  <p></p>
</div>
```
```js
const oDiv = document.querySelector("div");
const oP = document.querySelector("p");

oDiv.removeChild(oP); /* 删除并返回该节点 */
```

## 创建元素的三种方法：

## 事件高级：

## BOM：

## 定时器：

## 同步异步：

## 元素可视区 client 系列：

## 元素偏移量offset系列：

## 元素滚动scroll系列：

## 视口宽度：

## 滚动条：

## 兼容性：

## 闭包：

## 终极原型链：

## 模拟多线程：

## 深浅拷贝：

## 公有、私有、静态、特权：

## 轮询机制：

## 节流、防抖：
