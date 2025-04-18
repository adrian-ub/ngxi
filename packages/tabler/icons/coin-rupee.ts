import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCoinRupeeIcon],svg[tabler-coin-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M15 8H9h1a3 3 0 0 1 0 6H9l3 3m-3-6h6"></svg:path></svg:g>`,
})
export class TablerCoinRupeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
