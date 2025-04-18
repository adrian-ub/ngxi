import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryHoriz050SharpIcon],svg[material-symbols-light-battery-horiz-050-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.48 16.116v-2.424H3v-3.384h1.48V7.885H21v8.23zm.981-1H13V8.885H5.462z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryHoriz050SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
