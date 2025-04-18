import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageVoicemailIcon],svg[mage-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.644 15.894a3.894 3.894 0 1 0 0-7.788a3.894 3.894 0 0 0 0 7.788m10.712 0a3.894 3.894 0 1 0 0-7.788a3.894 3.894 0 0 0 0 7.788m-10.712 0h10.712"></svg:path>`,
})
export class MageVoicemailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
