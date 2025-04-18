import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroidAlertOutlineSharpIcon],svg[material-symbols-light-battery-android-alert-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 12.596h1V8.635h-1zM4 16.75h14.539v-9.5H4zm-1 1V6.25h16.539V10H21v4h-1.461v3.75zm1-1v-9.5zm6.27-1.384h1.46v-1.462h-1.46z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroidAlertOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
