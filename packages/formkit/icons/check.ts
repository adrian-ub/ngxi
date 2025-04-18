import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitCheckIcon],svg[formkit-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.99 0L10.13 17.17l-5.44-5.54L0 16.41L10.4 27l4.65-4.73l.04.04L32 5.1z"></svg:path>`,
})
export class FormkitCheckIcon {
  readonly viewBox = input("0 0 32 27")
  readonly width = input("1.19em")
  readonly height = input("1em")
}
