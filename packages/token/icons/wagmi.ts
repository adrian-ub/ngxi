import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenWagmiIcon],svg[token-wagmi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.116 4.286H3v6.14l9 7.727l9-8.145V4.325l-9 7.495zm13.796 0L12 8.53L7.089 4.286zM21 13.878l-6.943 5.837H21zm-10.993 5.837L3 13.672v6.043z"></svg:path>`,
})
export class TokenWagmiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
