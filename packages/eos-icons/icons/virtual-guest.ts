import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsVirtualGuestIcon],svg[eos-icons-virtual-guest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2v-2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 14H3V4h18Z"></svg:path><svg:path fill="currentColor" d="M6 7v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m11 6H7V8h10Z"></svg:path>`,
})
export class EosIconsVirtualGuestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
