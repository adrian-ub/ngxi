import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTrainSpeedIcon],svg[carbon-train-speed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 25H2v2h2v2h2v-2h5v2h2v-2h5v2h2v-2h5v2h2v-2h3zm-.286-8.41L18.15 8.64A14.93 14.93 0 0 0 9.652 6H2v2h7.652a12.95 12.95 0 0 1 7.365 2.287l1.036.713H9v2h11.962l7.62 5.238A.966.966 0 0 1 28.033 20H2v2h26.034a2.966 2.966 0 0 0 1.68-5.41"></svg:path>`,
})
export class CarbonTrainSpeedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
