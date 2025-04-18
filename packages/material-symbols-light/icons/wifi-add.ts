import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWifiAddIcon],svg[material-symbols-light-wifi-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.577L1.423 9q2.183-1.964 4.91-2.982Q9.063 5 12 5t5.666 1.018Q20.394 7.037 22.577 9l-1.821 1.821q-.479-.179-.99-.268q-.51-.09-1.03-.09q-2.42 0-4.122 1.703q-1.702 1.701-1.702 4.123q0 .52.089 1.03q.09.51.268.989zm6.27.039v-3h-3v-1h3v-3h1v3h3v1h-3v3z"></svg:path>`,
})
export class MaterialSymbolsLightWifiAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
