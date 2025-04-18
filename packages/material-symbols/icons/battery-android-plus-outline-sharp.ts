import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryAndroidPlusOutlineSharpIcon],svg[material-symbols-battery-android-plus-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15.5h2V13h2.5v-2H12V8.5h-2V11H7.5v2H10zm-6 1.25h14v-9.5H4zm-2 2V5.25h18V9.5h2v5h-2v4.25zm2-2v-9.5z"></svg:path>`,
})
export class MaterialSymbolsBatteryAndroidPlusOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
