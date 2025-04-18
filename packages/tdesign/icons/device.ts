import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDeviceIcon],svg[tdesign-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h22v4h-2V4H3v13h9v2H1zm13 6h10v14H14zm2 2v10h6V10zm1.998 6.998h2.004v2.004h-2.004zM5 20h7v2H5z"></svg:path>`,
})
export class TdesignDeviceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
