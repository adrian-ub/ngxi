import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWifiLockSharpIcon],svg[material-symbols-light-wifi-lock-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.462 19.577v-4.539h1.019v-1q0-.748.51-1.258q.511-.51 1.259-.51t1.259.51t.51 1.259v1H21v4.538zm1.788-4.539h2v-1q0-.425-.288-.712t-.712-.288t-.712.288t-.288.712zM12 19.578L1.423 9q2.183-1.964 4.91-2.982Q9.063 5 12 5t5.666 1.018Q20.394 7.037 22.577 9l-1.821 1.821q-.479-.179-.99-.268q-.51-.09-1.03-.09q-2.42 0-4.122 1.703q-1.702 1.701-1.702 4.123q0 .52.089 1.03q.09.51.268.989z"></svg:path>`,
})
export class MaterialSymbolsLightWifiLockSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
