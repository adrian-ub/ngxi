import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPermScanWifiIcon],svg[material-symbols-light-perm-scan-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.577L1.423 9q2.183-1.964 4.91-2.982Q9.063 5 12 5t5.666 1.018Q20.394 7.037 22.577 9zM11.5 15h1v-5h-1zm.5-6.192q.262 0 .439-.177t.176-.439t-.177-.438T12 7.577t-.438.177t-.177.438t.177.439t.438.177"></svg:path>`,
})
export class MaterialSymbolsLightPermScanWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
