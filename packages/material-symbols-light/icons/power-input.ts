import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPowerInputIcon],svg[material-symbols-light-power-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14.5v-1h4.058v1zm0-4v-1h17v1zm6.442 4v-1h4.116v1zm6.5 0v-1H20v1z"></svg:path>`,
})
export class MaterialSymbolsLightPowerInputIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
