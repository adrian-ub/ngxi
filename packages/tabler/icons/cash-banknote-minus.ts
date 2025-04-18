import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCashBanknoteMinusIcon],svg[tabler-cash-banknote-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path><svg:path d="M12 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7m-3-3h.01M6 12h.01M16 19h6"></svg:path></svg:g>`,
})
export class TablerCashBanknoteMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
