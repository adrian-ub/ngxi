import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsContactsOutlineIcon],svg[bitcoin-icons-contacts-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 9.5v-2a3 3 0 1 1 6 0v2a3 3 0 0 1-1.5 2.599v1.224a1 1 0 0 0 .629.928l2.05.82A3.69 3.69 0 0 1 18.5 18.5h-13c0-1.51.92-2.868 2.321-3.428l2.05-.82a1 1 0 0 0 .629-.929v-1.224A3 3 0 0 1 9 9.5"></svg:path>`,
})
export class BitcoinIconsContactsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
