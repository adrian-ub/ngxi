import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPenisAltOutlineIcon],svg[healthicons-penis-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.999 6h2S7.881 21.506 8 25.004C8.148 29.402 12 42 12 42h-2S6.147 29.339 6.002 25.07C5.901 22.06 9 6 9 6m30.001 0h-2s3.118 15.506 3 19.004C39.852 29.402 36 42 36 42h2s3.853-12.661 3.998-16.93C42.099 22.06 39 6 39 6M23 23v10a1 1 0 1 0 2 0V23h2v10a3 3 0 1 1-6 0V23zm-3 2v1a1 1 0 0 0 1 1v2a3 3 0 0 1-3-3v-1zm8 1v-1h2v1a3 3 0 0 1-3 3v-2a1 1 0 0 0 1-1"></svg:path><svg:path d="M23 42v-7h2v7z"></svg:path></svg:g>`,
})
export class HealthiconsPenisAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
