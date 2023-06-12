{
  type LoadingState = { state: "loading" };
  type SuccessState = { state: "success"; response: { body: string } };
  type FailState = { state: "fail"; reason: string };
  type ResourceLoadState = SuccessState | LoadingState | FailState;

  printLoginState({ state: "loading" });
  printLoginState({ state: "success", response: { body: "loaded" } });
  printLoginState({ state: "fail", reason: "no network" });

  function printLoginState(loadstate: ResourceLoadState) {
    switch (loadstate.state) {
      case "loading":
        console.log("loading!🥹");
        break;
      case "success":
        console.log(`${loadstate.response.body}`);
        break;
      case "fail":
        console.log(`${loadstate.reason}🥹`);
        break;

      default:
        throw new Error("unknown command");
    }
  }
}
