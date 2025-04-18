import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroidPlusIcon],svg[material-symbols-light-battery-android-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 15h1v-2.5H14v-1h-2.5V9h-1v2.5H8v1h2.5zm-5.884 2.75q-.691 0-1.153-.462T3 16.134V7.866q0-.691.463-1.153t1.152-.463h13.308q.69 0 1.153.463t.462 1.153V10h.355q.443 0 .775.332t.332.784v1.769q0 .483-.332.799t-.775.316h-.354v2.135q0 .69-.463 1.153t-1.153.462z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroidPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
