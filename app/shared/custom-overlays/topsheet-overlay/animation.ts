import { animate, style, transition, trigger } from "@angular/animations";

export const routeSlideStateTrigger = trigger("routeSlideState", [
  transition(":enter", [
    style({
      transform: "translateY(-100vh)"
    }),
    animate("100ms ease-out")
  ]),
  transition(":leave",
    animate(
      "1000ms",
      style({
        transform: "translateY(-100vh)"
      })
    )
  )
]);
