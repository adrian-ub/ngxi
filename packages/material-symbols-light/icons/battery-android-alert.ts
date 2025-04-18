import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroidAlertIcon],svg[material-symbols-light-battery-android-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.366q.31 0 .52-.21t.21-.52t-.21-.521t-.52-.211t-.52.21t-.21.52t.21.52q.209.212.52.212m-.5-2.77h1V8.635h-1zM4.616 17.75q-.691 0-1.153-.462T3 16.134V7.866q0-.691.463-1.153t1.152-.463h13.308q.69 0 1.153.463t.462 1.153V10h.355q.443 0 .775.332t.332.784v1.769q0 .483-.332.799t-.775.316h-.354v2.135q0 .69-.463 1.153t-1.153.462z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroidAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
