import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWalletTravelIcon],svg[mdi-wallet-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14H4V8h3v2h2V8h6v2h2V8h3m0 11H4v-2h16M9 4h6v2H9m11 0h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2"></svg:path>`,
})
export class MdiWalletTravelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
