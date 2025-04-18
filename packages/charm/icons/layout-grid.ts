import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmLayoutGridIcon],svg[charm-layout-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 2.75h12.5v10.5H1.75zM2 8h12m-3.75-4.75v9.5m-4.5-9.5v9.5"></svg:path>`,
})
export class CharmLayoutGridIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
