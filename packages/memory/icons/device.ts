import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryDeviceIcon],svg[memory-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h18v1h.94v18H20v1H2v-1h-.94V2H2zm1 2v16h16V3zm1 1h14v8H4zm1 10h3v3H5zm7 1h2v2h-2zm3-1h2v2h-2z"></svg:path>`,
})
export class MemoryDeviceIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
