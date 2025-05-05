import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAmpIcon],svg[picon-amp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h8v6H0m1-4h6V3H1m0 4h6V6H1m1 1h1V5H2m3 2h1V5H5M1 2q3-4 6 0H6Q4 0 2 2"></svg:path>`,
})
export class PiconAmpIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
