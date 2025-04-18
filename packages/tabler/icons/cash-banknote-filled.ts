import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCashBanknoteFilledIcon],svg[tabler-cash-banknote-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm-7 4a3 3 0 0 0-2.996 2.85L9 12a3 3 0 1 0 3-3m6.01 2H18a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m-12 0H6a1 1 0 1 0 .01 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerCashBanknoteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
