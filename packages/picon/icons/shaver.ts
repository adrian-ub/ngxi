import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconShaverIcon],svg[picon-shaver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3V0h8v3H5v5H3V3M1 1v1h6V1"></svg:path>`,
})
export class PiconShaverIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
