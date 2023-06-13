{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static MakeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up..!");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return{
        shots,
        hasMilk:false 
      }
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
      //   if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
      //     throw new Error("Not enough coffee beans!");
      //   }
      //   this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      //   return {
      //     shots,
      //     hasMilk: false,
      //   };
    }
  }
  const maker = CoffeeMaker.MakeMachine(32);
  maker.fillCoffeeBeans(32);
 }
