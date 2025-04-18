import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiLockUnlockedIcon],svg[oi-lock-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0C2.9 0 2 .9 2 2h1c0-.56.44-1 1-1s1 .44 1 1v2H1v4h6V4H6V2c0-1.1-.9-2-2-2"></svg:path>`,
})
export class OiLockUnlockedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
