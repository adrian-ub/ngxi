import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryAndroid1SharpIcon],svg[material-symbols-battery-android-1-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16.75h12v-9.5H6zm-4 2V5.25h18V9.5h2v5h-2v4.25z"></svg:path>`,
})
export class MaterialSymbolsBatteryAndroid1SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
