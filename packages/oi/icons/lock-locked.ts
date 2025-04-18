import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiLockLockedIcon],svg[oi-lock-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0C2.9 0 2 .9 2 2v1H1v4h6V3H6V2c0-1.1-.9-2-2-2m0 1c.56 0 1 .44 1 1v1H3V2c0-.56.44-1 1-1"></svg:path>`,
})
export class OiLockLockedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
