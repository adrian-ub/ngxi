import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroidShareOutlineSharpIcon],svg[material-symbols-light-battery-android-share-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 15.25h1v-3h5.887l-1.6 1.575l.713.713l2.788-2.788L12.5 8.961l-.708.689l1.595 1.6H6.5zM4 16.75h14.539v-9.5H4zm-1 1V6.25h16.539V10H21v4h-1.461v3.75zm1-1v-9.5z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroidShareOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
