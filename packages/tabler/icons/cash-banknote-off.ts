import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCashBanknoteOffIcon],svg[tabler-cash-banknote-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9.88 9.878a3 3 0 1 0 4.242 4.243m.58-3.425a3 3 0 0 0-1.412-1.405"></svg:path><svg:path d="M10 6h9a2 2 0 0 1 2 2v8c0 .294-.064.574-.178.825M18 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1m12 6h.01M6 12h.01M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerCashBanknoteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
