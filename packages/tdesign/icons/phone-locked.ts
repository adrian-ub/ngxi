import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPhoneLockedIcon],svg[tdesign-phone-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h16v10h-2V3H6v18h5v2H4zm13.5 13.5c.69 0 1.25.56 1.25 1.25v.75h-2.5v-.75c0-.69.56-1.25 1.25-1.25m3.25 2v-.75a3.25 3.25 0 0 0-6.5 0v.75h-1.251V23h9v-6.5zm-.751 2V21h-5v-2.5z"></svg:path>`,
})
export class TdesignPhoneLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
