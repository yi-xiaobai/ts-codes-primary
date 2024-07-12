// 类型别名：变量的作用 存储一个类型 后续可以直接引用

// Handler相当于一个变量的作用 存储了一个函数
// 其返回值类型是void 没有入参
type Handler = () => void;

const handler1: Handler = () => {};
const handler2: Handler = () => {};

// 替换接口 实现对对象的复用
type YUser = {
  name: string;
  age: number;
  address: string;
  job?: string;
};

const yuser1: YUser = {
  name: "yy",
  age: 20,
  address: "北京市",
  job: "开发开发开啊",
};

// 联合类型：理解为或逻辑

//! PossibleTypes 类型别名
// 又可以是 string类型 或者 number类型 或者 boolean类型 三个类型都可以
// 这是三个类型称之为 类型成员 满足其一 就被认为满足这个类型
type PossibleTypes = string | number | boolean;

// string类型的 PossibleTypes
const p1: PossibleTypes = "你好 ts";

// number类型的 PossibleTypes
const p2: PossibleTypes = 20;

// boolean类型的 PossibleTypes
const p3: PossibleTypes = true;

// 字面量联合类型：一组 精确的 字面量类型

// 具体化了
//! Status类型别名只能是 'success' 或者是 'fail'
//? 组成Status 的两个值就是字面量类型

type Status = "success" | "fail";
const status1: Status = "success";
const status2: Status = "fail";

//! 同上 Codes类型别名
// 只能是 200 / 400 / 500
type Codes = 400 | 500 | 200;
// const codes1:Codes = 300

// 交叉类型：理解为与逻辑 同时满足其中所有类型成员的类型
//? type Test = string & number
