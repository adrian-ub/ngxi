import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineFileDownloadOffIcon],svg[ic-outline-file-download-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15.17V15h2v2.17zm-2.59-2.58L17 11l-1.41-1.41L14 11.17zM13 10.17V4h-2v4.17zm8.19 11.02l-1.78-1.78l-16.6-16.6l-1.42 1.41l6.19 6.19L7 11l5 5l.59-.59L15.17 18H6v-3H4v3c0 1.1.9 2 2 2h11.17l2.61 2.61z"></svg:path>`,
})
export class IcOutlineFileDownloadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
