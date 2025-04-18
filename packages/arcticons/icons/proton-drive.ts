import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProtonDriveIcon],svg[arcticons-proton-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsProtonDrive0" fill="none" stroke="currentColor" d="M4.5 36.103V11.897a4.035 4.035 0 0 1 4.034-4.035h7.567a3.6 3.6 0 0 1 2.122.695l2.532 1.86a3.6 3.6 0 0 0 2.123.695h16.588a4.035 4.035 0 0 1 4.034 4.035v20.956a4.035 4.035 0 0 1-4.035 4.035H8.535A4.035 4.035 0 0 1 4.5 36.103"></svg:path></svg:defs><svg:use href="#arcticonsProtonDrive0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsProtonDrive0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.207 40.138v-21.05a3.14 3.14 0 0 0-3.156-3.139l-15.276.088a3.14 3.14 0 0 1-1.837-.58l-3.402-2.419a3.14 3.14 0 0 0-1.818-.58H4.5"></svg:path>`,
})
export class ArcticonsProtonDriveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
