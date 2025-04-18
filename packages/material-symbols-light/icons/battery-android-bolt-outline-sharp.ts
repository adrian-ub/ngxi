import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroidBoltOutlineSharpIcon],svg[material-symbols-light-battery-android-bolt-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.942 15.173h.424l3.807-3.808h-2.675l.56-2.538h-.423l-3.808 3.807h2.675zM4 16.75h14.539v-9.5H4zm-1 1V6.25h16.539V10H21v4h-1.461v3.75zm1-1v-9.5z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroidBoltOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
