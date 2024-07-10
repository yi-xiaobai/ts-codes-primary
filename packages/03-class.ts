// 面向过程、面向对象

// 面向过程：逐步的按照顺序的完成
// 面向对象：对象携带着信息 组合在一起即可

// class类：第一个好处：封装性
// 将与其相关的操作都封装在一个类中 供外界进行交互 对于我们开发也可以按照类别处理

class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDesc(): string {
    return `我叫${this.name},今年${this.age}岁了`;
  }
}
/**
 * 上面定义了一个Person类 我们将与其相关的name、age字段都封装到一个类中 一目了然 很清晰
 */

// 如果用面向过程的思维来搞定
const person = {
  name: "ll",
  age: 18,
};

const getPersonDesc = (person) => {
  return `我叫${person.name},今年${person.age}岁了`;
};

// 变量和函数分散到各处 不利于维护

/**
 * 不过 个人理解 class 用得适当就用 不要什么都去用
 * 比如上面的Person 可能还有其他的什么分数、地址、身高等等一系列东西 class就比较方便
 * 但是面向过程也有优点 比较简单明了的 直接用其即可 不用使用class增加心智负担
 */

// class类：第二个好处：继承
class School {}

class Student extends Person {
  grade: number;
  school: School;
}

class Job {}

class Workers extends Person {
  salary: number;
  job: Job;
}

/**
 * 通过继承关系 可以大大减少重复属性的编写 获得更简洁更好维护的代码
 */

// 权限
// private:私有(外界不能获取)
// public:公有(外界可以获取)

// 命名空间：一批功能类似的方法都放到一个类中
export class DateUtils{
    // static：静态成员 不是实例上的属性 直接通过类来访问方法
    static isSameDate(){}
    static diffDate(){}
}
