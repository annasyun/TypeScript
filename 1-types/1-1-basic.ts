{
  //number
  const num: number = -10;

  //string
  const str: string = "hello world";

  //boolean
  const boal: boolean = true;

  //undefined
  let name: undefined; // 이렇게 undefined type을 지정하지 않음.
  let age: number | undefined;
  age = undefined;
  age = 20;

  function find(): number | undefined {
    return undefined;
  }

  //null
  let person: null; // 이렇게 null type을 지정하지 않음.
  let person2: null | string;

  //unknown
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any
  let anything: any = 0;
  anything: undefined;

  //void
  function print() {
    console.log("hello world");
    return;
  }

  //never
  function throwError(message: string): never {
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 이렇게 사용되지 않음.

  //object

  let obj: object; // 이렇게 사용되지 않음.
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "toma" });
  acceptSomeObject({ animal: "cat" });
}
