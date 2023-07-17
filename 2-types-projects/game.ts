{
  type Position = { x: number; y: number };
  let position: Position = { x: 0, y: 0 };

  type Method = "up" | "down" | "left" | "right";
  
  function move(method: Method): object {
    let update_position = { ...position };
    switch (method) {
      case "up":
        update_position.y += 1;
        break;
      case "down":
        update_position.y -= 1;
        break;
      case "left":
        update_position.x -= 1;
        break;
      case "right":
        update_position.x += 1;
        break;

      default:
        throw new Error("Unknown Method");
    }
    return update_position;
  }
  console.log(move("down"));
}
