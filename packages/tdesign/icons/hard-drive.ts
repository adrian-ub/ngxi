import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHardDriveIcon],svg[tdesign-hard-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v10h16V4zm16 12H4v4h16zm-14.002.998h2.004v2.004H5.998zm3 0h2.004v2.004H8.998z"></svg:path>`,
})
export class TdesignHardDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
