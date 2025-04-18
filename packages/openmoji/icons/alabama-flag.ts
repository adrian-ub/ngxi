import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiAlabamaFlagIcon],svg[openmoji-alabama-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:rect width="70.5" height="6.5" y="35" fill="#d22f27" rx="3.25" transform="rotate(30 40 38)"></svg:rect><svg:rect width="70.5" height="6.5" y="35" fill="#d22f27" rx="3.25" transform="rotate(-30 31 36)"></svg:rect><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiAlabamaFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
