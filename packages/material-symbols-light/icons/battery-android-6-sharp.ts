import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroid6SharpIcon],svg[material-symbols-light-battery-android-6-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16.75h2.539v-9.5H16zm-13 1V6.25h16.539V10H21v4h-1.461v3.75z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroid6SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
