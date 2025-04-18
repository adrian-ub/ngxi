import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTktonWalletIcon],svg[arcticons-tkton-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 18.332h39m-39 0l6.204-11.896h26.591L43.5 18.332L24 41.564zM22.799 6.436l-6.123 11.896m14.648 0L25.201 6.436M24 18.332v23.232"></svg:path>`,
})
export class ArcticonsTktonWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
