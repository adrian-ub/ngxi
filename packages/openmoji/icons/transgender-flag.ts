import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTransgenderFlagIcon],svg[openmoji-transgender-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-width="0"><svg:path fill="#92d3f5" d="M6 46.8h60V54H6z"></svg:path><svg:path fill="#ffa7c0" d="M6 39.6h60v7.2H6z"></svg:path><svg:path fill="#fff" d="M6 32.4h60v7.2H6z"></svg:path><svg:path fill="#ffa7c0" d="M6 25.2h60v7.2H6z"></svg:path><svg:path fill="#92d3f5" d="M6 18h60v7.2H6z"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiTransgenderFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
