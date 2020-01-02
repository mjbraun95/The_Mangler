import Mangler from "src/mangler";

export default class InputHandler {
  constructor(mangler) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          mangler.moveLeft();
          break;

        case 39:
          mangler.moveRight();
          break;

        default:
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (mangler.speed < 0) mangler.stop();
          break;

        case 39:
          if (mangler.speed > 0) mangler.stop();
          break;

        default:
          break;
      }
    });
  }
}
