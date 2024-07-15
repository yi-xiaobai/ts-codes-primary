// 泛型

/**
 * CompleteStatus<T> 中的T是一个变量 一个参数
 * 至少目前为止 不知道T具体是什么
 * 跟函数的参数有些异曲同工之妙
 */
type CompleteStatus<T> = string | number | T;

// 此时cs1就是一个类型别名
// 类型成员有 string number boolean
type cs1 = CompleteStatus<boolean>;

/**
 * T 自动赋值：无需操心到底有哪些可能的类型输入了
 * 同时作为入参以及返回值的实际类型：使用了一个泛型参数 实现了入参和返回值类型的绑定
 * @param input
 * @returns
 */
function factory<T>(input: T): T {
  return input;
}

const f1 = factory<string>("111");
console.log("==>Get f1", f1);

/**
 * 泛型让类型别名 变成了类型世界里面的函数
 * 也确实
 * type CompleteStatus<T> = string | number | T;
 * 可以理解上面的就是一个类型工厂 需要我们去调用得到最终的类型
 */

/**
 * 泛型让函数的参数类型可以进行自动推导 并且和返回值的类型进行关联 实现类型保护
 */
