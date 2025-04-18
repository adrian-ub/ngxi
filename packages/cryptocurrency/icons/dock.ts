import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyDockIcon],svg[cryptocurrency-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-.069-21.229v-.004A8 8 0 1 0 23 18.87l-.001-.067V6.142a1.143 1.143 0 0 0-2.286 0v12.576a5.695 5.695 0 1 1-4.705-5.63l-1.707 1.707a1.143 1.143 0 0 0 1.616 1.616l3.64-3.636a1.143 1.143 0 0 0 0-1.617l-3.636-3.636l-.038-.038a1.144 1.144 0 1 0-1.582 1.654z"></svg:path>`,
})
export class CryptocurrencyDockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
