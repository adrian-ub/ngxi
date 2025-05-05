import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWalkIcon],svg[picon-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3L3 5l1 1v2H3V6L2 5L1 8H0l2-5H1v2H0V3l2-1h2l1 1h1v1H5M4 0l1 1l-1 1l-1-1"></svg:path>`,
})
export class PiconWalkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
