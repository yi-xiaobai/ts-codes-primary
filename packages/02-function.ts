// 函数声明
function handler(arg) {}

// 函数表达式
const handlers = function (args) {};

/**
 * 区别：
 * 函数声明可以在调用之后声明 相当于给当前作用域一个广播 随时都可以来调用
 * 但是函数表达式则是到这儿来了才会执行 完成函数的创建
 */

// 函数结合ts个人理解为 对参数以及返回值类型的限制

// 声明一个独立的函数类型 type：类型别名
type Sum = (a: string, b: string) => string;

// 不需要手动来标注参数类型以及返回值类型 ts会将Sum中的类型和函数表达式进行自动匹配
const sum: Sum = (a, b) => {
  return "";
};

/**
 * void undefined区别
 * void 代表没有返回值
 * undefined 是一个有意义的类型 需要return关键字的标注
 */

function fnVoid(): void {}
function fnUndefined(): undefined {
  return;
}

// 函数重载：针对参数类型不同 执行逻辑不通的处理 ts进行了类型层面的重载

function count(x: number, y: number): number;
function count(x: number[], y: number): number[];
function count(x: number, y: number[]): number[];
function count(x: number[], y: number[]): number[];

function count(x: number | number[], y: number | number[]): number | number[] {
  // if else。。。。。
  // js不支持这种写法 本质上还是if else的写法 只是在类型层面上做了重载 方便理解
  return 1;
}
