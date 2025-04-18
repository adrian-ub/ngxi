import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsDevicesIcon],svg[bxs-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M6 9h4l-.003 9H4V9zm6 8V9c0-1.103-.897-2-2-2H7V5h11v12z"></svg:path>`,
})
export class BxsDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
