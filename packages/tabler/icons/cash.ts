import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCashIcon],svg[tabler-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></svg:path><svg:path d="M7 10a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"></svg:path><svg:path d="M12 14a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path></svg:g>`,
})
export class TablerCashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
