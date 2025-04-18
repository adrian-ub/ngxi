import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAppleStocksIcon],svg[hugeicons-apple-stocks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M2.5 14.5h.539c.472 0 .708 0 .914-.099c.205-.098.352-.283.647-.652L6 12l1.5 2.5L9 11l2.5 5L15 9l2 3.5l1.5-1.5l1.445 2.168c.252.378.378.567.562.681q.055.034.114.061c.198.09.425.09.879.09M15 2.5v3m0 16v-7"></svg:path><svg:circle cx="15" cy="9" r="1"></svg:circle></svg:g>`,
})
export class HugeiconsAppleStocksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
