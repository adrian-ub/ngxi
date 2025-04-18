import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroid0SharpIcon],svg[material-symbols-light-battery-android-0-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16.75h14.539v-9.5H4zm-1 1V6.25h16.539V10H21v4h-1.461v3.75z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroid0SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
