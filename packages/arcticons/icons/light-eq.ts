import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLightEqIcon],svg[arcticons-light-eq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.454 27.547a13.5 13.5 0 1 1 9.545 3.953h-7c-.554 0-1 .446-1 1v2c0 .554.446 1 1 1h13c.554 0 1 .446 1 1v2c0 .554-.446 1-1 1h-11.5c-.554 0-1 .446-1 1v2c0 .554.446 1 1 1h11"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.5 18A8.5 8.5 0 1 1 24 9.5"></svg:path>`,
})
export class ArcticonsLightEqIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
