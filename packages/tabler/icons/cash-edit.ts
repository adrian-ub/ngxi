import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCashEditIcon],svg[tabler-cash-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></svg:path><svg:path d="M11 19H8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.25m-2.58 4.36a2.1 2.1 0 1 1 2.97 2.97L18 22h-3v-3z"></svg:path></svg:g>`,
})
export class TablerCashEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
