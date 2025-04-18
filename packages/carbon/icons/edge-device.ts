import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonEdgeDeviceIcon],svg[carbon-edge-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21h14v2H9zm2-7a2 2 0 1 0 2 2a1.98 1.98 0 0 0-2-2m10 0a2 2 0 1 0 2 2a1.98 1.98 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M28 8h-9.586l2.072-2.072A2 2 0 0 0 21 6a2 2 0 1 0-2-2a2 2 0 0 0 .072.514L15.586 8H4a2.003 2.003 0 0 0-2 2v16a2.003 2.003 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V10a2.003 2.003 0 0 0-2-2M4 26V10h24v16Z"></svg:path>`,
})
export class CarbonEdgeDeviceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
