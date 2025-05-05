import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSafeIcon],svg[picon-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v1H1V7H0V0h7v7H6v1H5V7M4 3c4-2-5-2-1 0v2h1"></svg:path>`,
})
export class PiconSafeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
