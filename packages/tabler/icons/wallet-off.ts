import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWalletOffIcon],svg[tabler-wallet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 8V5a1 1 0 0 0-1-1H8m-3.413.584A2 2 0 0 0 6 8h2m4 0h6a1 1 0 0 1 1 1v3"></svg:path><svg:path d="M19 19a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6"></svg:path><svg:path d="M16 12h4v4m-4 0a2 2 0 0 1-2-2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerWalletOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
