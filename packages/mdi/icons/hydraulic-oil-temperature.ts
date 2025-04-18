import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHydraulicOilTemperatureIcon],svg[mdi-hydraulic-oil-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18c-1.66 0-3-1.34-3-3c0-2 3-5.37 3-5.37S12 13 12 15c0 1.66-1.34 3-3 3m5-14v16H4V4H2v16c0 1.11.89 2 2 2h10c1.11 0 2-.89 2-2V4zm-4 2V2H8v4H5v2h8V6zm11 11.5v-12c0-.83-.67-1.5-1.5-1.5S18 4.67 18 5.5v12a2.5 2.5 0 1 0 4 2c0-.79-.37-1.5-1-2M20 13h-1V6h1z"></svg:path>`,
})
export class MdiHydraulicOilTemperatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
