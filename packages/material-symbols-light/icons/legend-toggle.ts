import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLegendToggleIcon],svg[material-symbols-light-legend-toggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 18.27v-1h15v1zm0-3.77v-1h15v1zm0-4.154V9.17l5.48-3.342L15 9.397l4.5-3.205v1.239L15 10.616L9.944 7.035z"></svg:path>`,
})
export class MaterialSymbolsLightLegendToggleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
