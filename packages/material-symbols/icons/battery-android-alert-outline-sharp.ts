import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryAndroidAlertOutlineSharpIcon],svg[material-symbols-battery-android-alert-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12.25h2v-4h-2zm-6 4.5h14v-9.5H4zm-2 2V5.25h18V9.5h2v5h-2v4.25zm2-2v-9.5zm6-1h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsBatteryAndroidAlertOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
