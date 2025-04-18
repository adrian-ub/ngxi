import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxDevicesIcon],svg[bx-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M9.997 19H4V9h6zm10-2H12V9c0-1.103-.897-2-2-2H7V5h13z"></svg:path>`,
})
export class BxDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
