{
  //   //JavaScript
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }
  //   //TypeScript
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   //JavaScript
  //   function jsFetchNum(id) {
  //     //code
  //     //code
  //     //code
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }
  //   //TypeScript
  //   function fetchNum(id: string): Promise<number> {
  //     //code
  //     //code
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //Optional parameter
  function printName(firstName: string, LastName?: string) {
    console.log(firstName);
    console.log(LastName);
  }
  printName("steve", "ellie");
  printName("jobs");
  printName("tomas");

  //Default parameter
  function printMessage(str: string = "default message") {
    console.log(str);
  }
  printMessage();

  //Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2, 3));
}
