import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryAndroid3SharpIcon],svg[material-symbols-battery-android-3-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16.75h8v-9.5h-8zm-8 2V5.25h18V9.5h2v5h-2v4.25z"></svg:path>`,
})
export class MaterialSymbolsBatteryAndroid3SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
