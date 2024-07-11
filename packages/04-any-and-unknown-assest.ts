// 比如对于新入门+新接手这个项目的开发者来说，
// 可能费了九牛二虎之力好不容易标注了自己觉得算是比较完美的类型，
// 但一写上去又到处都是报错。
// 又或者说你在把一个 JavaScript 项目迁移到 TypeScript，一时半会也搞不清到底这个变量在这里是什么类型

// any 、 unknown

// any = 任意类型 + 跳过类型检查
// unknown = 任意类型 + 类型检查
let str: any = "any类型";
str.foo.bar(); // 并不会报错 因为any类型已经跳过了类型检查了
// 但是str.foo.bar() 我们开发是可以明显知道是有问题的 所以 unknown类型出来了

let foo: unknown = "hahahahah";
//! foo.bar();  // 直接报错了 因为虽然是unknown类型 但是保留了类型检查的能力 所以

// 类型断言
function myFunc(params: unknown) {
  // 如果说在unknown类型 里面再来一个函数 forEach
  // 还是那句话 我很清楚 这里的类型是一个数组 什么数组不重要
  // 所以类型断言出来了
  // 个人理解就是把一个已知的类型转变为另外一个类型 这里的场景 我们需要把unknown类型转变为数组类型
  //! params.forEach(ite=>{//...})
}

function myFuncAssest(params: unknown) {
  // 第一步 断言成 unknown数组类型
  (params as unknown[]).forEach((item) => {
    // 第二步 断言成 number 类型
    item = (item as number) + 1;
  });
}

//? 还有一种场景
interface IUser {
  yourname: string;
  job: IJob;
}

interface IJob {
  title: string;
}

const iUser: IUser = {
  yourname: "lll",
  job: {
    title: "job名称",
  },
};

//! 此时如果将job = {}
// 默认是一个空对象 那么取值会有问题   ts会认为此时的job对象是一个空对象
// 从而在结构赋值的时候 报错 并没有title这个属性
//! const { yourname, job = {} } = iUser;

// 通过类型断言的方式 将 {} 断言为 IJob类型 该类型上面由title属性 解决该问题
const { yourname, job = {} as IJob } = iUser;
const { title } = job;
