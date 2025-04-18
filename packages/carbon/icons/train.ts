import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTrainIcon],svg[carbon-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H11a5.006 5.006 0 0 0-5 5v12a4.99 4.99 0 0 0 3.582 4.77L7.769 29h2.176l1.714-4h8.682l1.714 4h2.176l-1.813-4.23A4.99 4.99 0 0 0 26 20V8a5.006 5.006 0 0 0-5-5M11 5h10a2.995 2.995 0 0 1 2.816 2H8.184A2.995 2.995 0 0 1 11 5m13 14h-3v2h2.816A2.995 2.995 0 0 1 21 23H11a2.995 2.995 0 0 1-2.816-2H11v-2H8v-2h16Zm0-4H8V9h16Z"></svg:path>`,
})
export class CarbonTrainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
