import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGasStationFillIcon],svg[ri-gas-station-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 1 0 2 0v-7h-2a1 1 0 0 1-1-1V6.414l-1.657-1.657l1.414-1.414l4.95 4.95A1 1 0 0 1 22 9v9a3 3 0 1 1-6 0v-4h-2v5h1v2H2v-2zM5 5v6h7V5z"></svg:path>`,
})
export class RiGasStationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
