import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHardDriveFilledIcon],svg[tdesign-hard-drive-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zM4 14V4h16v10zm4.002 2.998v2.004H5.998v-2.004zm3 0v2.004H8.998v-2.004z"></svg:path>`,
})
export class TdesignHardDriveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
