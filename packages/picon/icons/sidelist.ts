import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSidelistIcon],svg[picon-sidelist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0h3v8H5M0 0h4v2H0m0 1h4v2H0m0 1h4v2H0"></svg:path>`,
})
export class PiconSidelistIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
