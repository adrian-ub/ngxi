import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTrainTimeIcon],svg[carbon-train-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m25.496 10.088l-2.622-2.622V3h2.25v3.534l1.964 1.964z"></svg:path><svg:path fill="currentColor" d="M24 1a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6m1.497 9.088l-2.622-2.622V3h2.25v3.534l1.964 1.964Z"></svg:path><svg:path fill="currentColor" d="M6 16v-6h9V8H6.184A2.995 2.995 0 0 1 9 6h6V4H9a5.006 5.006 0 0 0-5 5v12a4.99 4.99 0 0 0 3.582 4.77L5.769 30h2.176l1.714-4h8.682l1.714 4h2.176l-1.813-4.23A4.99 4.99 0 0 0 24 21v-5Zm16 4h-3v2h2.816A2.995 2.995 0 0 1 19 24H9a2.995 2.995 0 0 1-2.816-2H9v-2H6v-2h16Z"></svg:path>`,
})
export class CarbonTrainTimeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
