import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siNorthWestEscapeAltLineIcon],svg[si-north-west-escape-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14 14L6 6m0 0v4m0-4h4m5 3h.6c1.33 0 2.4 1.07 2.4 2.4v4.2c0 1.33-1.07 2.4-2.4 2.4h-4.2C10.07 18 9 16.93 9 15.6V15"></svg:path>`,
})
export class SiNorthWestEscapeAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
