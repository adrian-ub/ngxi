import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPaycheckIcon],svg[picon-paycheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1h8v5H0m3-4H1v1l1 1H1v1h2V4L2 3h1m1 0h3V2H4"></svg:path>`,
})
export class PiconPaycheckIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
