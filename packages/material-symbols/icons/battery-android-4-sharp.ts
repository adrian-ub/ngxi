import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryAndroid4SharpIcon],svg[material-symbols-battery-android-4-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.75h6v-9.5h-6zm-10 2V5.25h18V9.5h2v5h-2v4.25z"></svg:path>`,
})
export class MaterialSymbolsBatteryAndroid4SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
