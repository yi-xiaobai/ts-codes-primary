// 基本类型

// 字符串
const msg: string = "hello ts";
// 数字
const age: number = 18;
// 布尔
const flag: boolean = true;

// 数组类型
/**
 * 两种定义数组的方式：
 * 1. Array<数组类型>
 * 2. 数组类型[]
 */
const arr: string[] = ["a", "b", "c"];
const queue: Array<number> = [1, 2, 3];

// 对象类型
interface User {
  name: string;
  age: number;
  married: boolean;
}

// 单独对象定义
const user: User = {
  name: "lll",
  age: 20,
  married: true,
};

// 数组对象
const userList: User[] = [
  {
    name: "yyy",
    age: 18,
    married: true,
  },
  {
    name: "qqq",
    age: 19,
    married: true,
  },
];

// 可选属性
interface Student {
  name: string;
  age: number;
  // 可选属性 可写可不写
  address?: string;
}

// 没加可选属性也可以
const s1: Student = {
  name: "章三",
  age: 30,
};

// 加了可选属性也可以ß
const s2: Student = {
  name: "里斯",
  age: 40,
  address: "上海市",
};

// 枚举
enum UserLevelCode {
  Visitor = 10001,
  NonVIPUser = 10002,
  VIPUser = 10003,
  Admin = 10010,
}

const visitor = UserLevelCode.Visitor
