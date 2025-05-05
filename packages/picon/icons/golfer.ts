import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGolferIcon],svg[picon-golfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7l1-1l1-2H0V0h7v.5H0L1 3h2l1 1l-1 2l1 2H3L2 6L1 7v1m6 0V7h1v1M4 3L3 2l1-1l1 1"></svg:path>`,
})
export class PiconGolferIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
