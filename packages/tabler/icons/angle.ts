import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAngleIcon],svg[tabler-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 19H3l9-15m8.615 11.171h.015m-1.115-3.4h.015m-1.815-3.1h.015m-2.315-2.7h.015"></svg:path>`,
})
export class TablerAngleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
