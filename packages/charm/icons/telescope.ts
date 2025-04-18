import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmTelescopeIcon],svg[charm-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.75 5.75l1 2.5m3.5-4.5l1.5 3.5m-9 0l1 2.5l11.5-3.5l-2-4.5zm6 3.95v3m-3-.5L7 11.2l1.75-.5l2.5 3"></svg:path>`,
})
export class CharmTelescopeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
