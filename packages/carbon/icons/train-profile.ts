import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTrainProfileIcon],svg[carbon-train-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 25H2v2h2v2h2v-2h5v2h2v-2h5v2h2v-2h5v2h2v-2h3zM8 16H2v-2h6v-2H2v-2h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="m28.55 14.23l-8.58-7.864A8.98 8.98 0 0 0 13.888 4H2v2h10v4a2 2 0 0 0 2 2h9.157l4.041 3.705A2.472 2.472 0 0 1 25.528 20H2v2h23.527a4.473 4.473 0 0 0 3.023-7.77M14 10V6.005a6.98 6.98 0 0 1 4.618 1.835L20.975 10Z"></svg:path>`,
})
export class CarbonTrainProfileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
