import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAirplaneTakeOff20FilledIcon],svg[fluent-airplane-take-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.676 5.16a7 7 0 0 0-.377.327a2.1 2.1 0 0 1-.735.465L4.759 7.887l-.593-1.224a1.2 1.2 0 0 0-.245-.341c-.619-.596-1.745-.276-1.902.621A1.3 1.3 0 0 0 2 7.16v2.986A1.75 1.75 0 0 0 4.321 11.8l3.018-1.043l-.293 1.465c-.311 1.555 1.687 2.466 2.657 1.212l3.098-4.006l4.179-1.351c.838-.272 1.332-1.28.737-2.091c-.516-.706-1.425-1.689-2.663-1.93a3 3 0 0 0-.886-.04c-1.018.1-1.909.67-2.492 1.143m-2.562.22l-3.73 1.244l-.04-.05C4.532 5.523 5.28 4 6.605 4c.323 0 .637.097.903.28zM2.5 17a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentAirplaneTakeOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
