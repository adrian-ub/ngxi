import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCameraWirelessOutlineIcon],svg[mdi-camera-wireless-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9v11H4V8h4.05l1.83-2H15V4H9L7.17 6H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9zm.67-1H22c0-3.32-2.69-6-6-6v1.33c2.58 0 4.66 2.08 4.67 4.67M18 8h1.33A3.33 3.33 0 0 0 16 4.67V6c1.11 0 2 .89 2 2M7 14a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5a5 5 0 0 0-5 5m8 0a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3"></svg:path>`,
})
export class MdiCameraWirelessOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
