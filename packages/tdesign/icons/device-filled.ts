import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDeviceFilledIcon],svg[tdesign-device-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v17h11.5V6.5H23zM12.5 20H5v2h7.5z"></svg:path><svg:path fill="currentColor" d="M14.5 8.5H24V22h-9.5zm3.748 8.498v2.004h2.004v-2.004z"></svg:path>`,
})
export class TdesignDeviceFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
