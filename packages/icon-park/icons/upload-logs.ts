import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUploadLogsIcon],svg[icon-park-upload-logs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M24 43.9998H10C8.89543 43.9998 8 43.1043 8 41.9998V5.99976C8 4.89519 8.89543 3.99976 10 3.99976H38C39.1046 3.99976 40 4.89519 40 5.99976V23.9998"></svg:path><svg:path stroke-linejoin="round" d="M35.5 43.9998V30.9998"></svg:path><svg:path stroke-linejoin="round" d="M31 34.4998L32.5 32.9998L35.5 29.9998L38.5 32.9998L40 34.4998"></svg:path><svg:path d="M16 15.9998H32"></svg:path><svg:path d="M16 23.9998H24"></svg:path></svg:g>`,
})
export class IconParkUploadLogsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
