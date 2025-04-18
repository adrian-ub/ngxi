import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonScisTransparentSupplyIcon],svg[carbon-scis-transparent-supply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 23v3H8.5a4.5 4.5 0 0 1 0-9H9v-2h-.5a6.5 6.5 0 0 0 0 13H23v3h8v-8Zm6 6h-4v-4h4Z"></svg:path><svg:path fill="currentColor" d="M21 22h-2v-3h-6v3h-2v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2zm-5-6a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M23.5 4H9V1H1v8h8V6h14.5a4.5 4.5 0 0 1 0 9H23v2h.5a6.5 6.5 0 0 0 0-13M7 7H3V3h4Z"></svg:path>`,
})
export class CarbonScisTransparentSupplyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
