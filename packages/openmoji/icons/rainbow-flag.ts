import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRainbowFlagIcon],svg[openmoji-rainbow-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-width="0"><svg:path fill="#b399c8" d="M5 48h62v6.2H5z"></svg:path><svg:path fill="#92d3f5" d="M5 42h62v6H5z"></svg:path><svg:path fill="#b1cc33" d="M5 36h62v6H5z"></svg:path><svg:path fill="#fcea2b" d="M5 30h62v6H5z"></svg:path><svg:path fill="#f4aa41" d="M5 24h62v6H5z"></svg:path><svg:path fill="#ea5a47" d="M5 17.8h62V24H5z"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiRainbowFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
