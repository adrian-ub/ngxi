import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPowerPlugIcon],svg[material-symbols-light-power-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.27 20v-2.654L7 14.077V9.621q0-.669.475-1.145T8.615 8h1.231l-.5.5V4h1v4h3.308V4h1v4.5l-.5-.5h1.23q.667 0 1.142.476T17 9.62v4.457l-3.27 3.27V20z"></svg:path>`,
})
export class MaterialSymbolsLightPowerPlugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
