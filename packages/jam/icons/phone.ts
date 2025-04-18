import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPhoneIcon],svg[jam-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm3 15a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class JamPhoneIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
