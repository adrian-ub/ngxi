import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerExchangeOffIcon],svg[tabler-exchange-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M17 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M19 8v5c0 .594-.104 1.164-.294 1.692m-1.692 2.298A4.98 4.98 0 0 1 14 18h-3l3-3m0 6l-3-3m-6-2v-5c0-1.632.782-3.082 1.992-4M10 6h3l-3-3m1.501 4.499L13 6M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerExchangeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
