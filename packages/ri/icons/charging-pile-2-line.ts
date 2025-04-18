import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChargingPile2LineIcon],svg[ri-charging-pile-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11h-1V7h1V4h2v3h1v4h-1v7a3 3 0 1 1-6 0v-4h-2v5h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 1 0 2 0zm-8 8V5H5v14zm-3-8h3l-4 6v-4H5l4-6z"></svg:path>`,
})
export class RiChargingPile2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
