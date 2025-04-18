import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCashBanknoteEditIcon],svg[tabler-cash-banknote-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"></svg:path><svg:path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-3 0h.01m12.41 3.61a2.1 2.1 0 1 1 2.97 2.97L18 22h-3v-3z"></svg:path></svg:g>`,
})
export class TablerCashBanknoteEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
