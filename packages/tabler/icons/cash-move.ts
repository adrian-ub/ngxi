import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCashMoveIcon],svg[tabler-cash-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></svg:path><svg:path d="M12 19H8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2.5"></svg:path><svg:path d="M15.92 13.437a2 2 0 1 0-2.472 2.486M16 19h6m-3-3l3 3l-3 3"></svg:path></svg:g>`,
})
export class TablerCashMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
