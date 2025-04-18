import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryHoriz075SharpIcon],svg[material-symbols-light-battery-horiz-075-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.48 16.116v-2.424H3v-3.384h1.48V7.885H21v8.23zm.981-1h4.52V8.885H5.46z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryHoriz075SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
