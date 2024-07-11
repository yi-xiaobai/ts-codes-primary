# ts-codes-primary

## 原型对象和对象类型

**定义数组的两种方式**

1. Array<数组类型>
2. 数组类型[]

**可选属性**

```ts
interface User {
  name: string;
  address?: string;
}
```

带有一个`?`代表可选 可添加属性可不添加

**数组对象**

上面的`User`可以看作一个对象 再加上数组的定义 数组对象的定义就出来:`User[]`

**枚举**

简单定义下：

```ts
enum UserLevelCode {
    Visitor = 10001
    Admin = 10002
    ....
}
```

## 函数类型和重载

**函数声明和函数表达式**

1. 函数声明：可以在调用之后声明 相当于给当前作用于一个广播 可以随时调用
2. 函数表达式：只有到这块代码了 才会创建函数

**函数结合 ts**

个人理解为对`参数`以及`返回值`的限制 主要这也是我们最关注的两个地方 调用函数传递参数 获取返回值（如需用到）

认识了一个新东西：类型别名`type`

```ts
type Sum = (a: number, b: number) => number;

// 不需要手动来标注参数类型以及返回值类型 ts会将Sum中的类型和函数表达式进行自动匹配
const sum: Sum = function (a, b) {
  return a + b;
};
```

**void undefined**

1. void：代表没有返回值 可以不写 也不需要`return`关键字
2. undefined：是一个有意义的类型 需要手动标注一下且要有`return`关键字

**函数重载**

> 针对参数类型不同 执行逻辑不同的处理

`ts仅进行了类型层面的重载`

```ts
function count(x: number, y: number): number;
function count(x: number[], y: number): number[];
function count(x: number, y: number[]): number[];
function count(x: number[], y: number[]): number[];

function count(x: number | number[], y: number | number[]): number | number[] {
  // if else。。。。。
  // js不支持这种写法 本质上还是if else的写法 只是在类型层面上做了重载 方便我们学者理解吧
  // 以后要是哪位大佬开发出来一门语言 把这个改了 哈哈哈哈
  return 1;
}
```

## ts 中的 Class

**类的好处之一：封装性**

> 将与该类相关联的数据都放入到一个类中 增加了类的可维护性 也很一目了然 很清晰

**类的好处之一：继承**

> 大大减少重复性属性的编写 获得更简洁更好维护的代码


**权限**

1. private（私有）
2. public （公有）

权限问题：不想给外界暴露出来的用`private` 反之则用`public`

**命名空间**

> 一批功能类似的方法都放到一个类中

```ts
export class DateUtils {
  // static：静态成员 不是实例上的属性 直接通过类来访问方法
  static isSameDate() {}
  static diffDate() {}
}
```

宗旨个人感觉就是利用各项技术来使我们写代码 维护代码 更好 到达一个更高的层次

