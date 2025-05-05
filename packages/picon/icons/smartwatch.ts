import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSmartwatchIcon],svg[picon-smartwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6V2H2v4m3 1v1H3V7H2L1 6V2l1-1h1V0h2v1h1l1 1v4L6 7"></svg:path>`,
})
export class PiconSmartwatchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
