import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryAndroidBoltOutlineSharpIcon],svg[material-symbols-battery-android-bolt-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 15.75h.5l4.5-4.5h-3.175l.675-3h-.5l-4.5 4.5h3.175zm-5.75 1h14v-9.5H4zm-2 2V5.25h18V9.5h2v5h-2v4.25zm2-2v-9.5z"></svg:path>`,
})
export class MaterialSymbolsBatteryAndroidBoltOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
