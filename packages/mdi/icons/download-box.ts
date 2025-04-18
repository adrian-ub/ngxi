import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadBoxIcon],svg[mdi-download-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m3 14h8v-2H8zm8-7h-2.5V7h-3v3H8l4 4z"></svg:path>`,
})
export class MdiDownloadBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
