import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconStraightenIcon],svg[picon-straighten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 3l5-1l1 3l-5 1M0 1h8v1H0m0 4h8v1H0"></svg:path>`,
})
export class PiconStraightenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
