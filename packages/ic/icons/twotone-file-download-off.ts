import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFileDownloadOffIcon],svg[ic-twotone-file-download-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5h-2v3.17l2 2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m11 8.17l-2-2V3h6v6h4l-3.59 3.59L13 10.17V5h-2zm10.19 13.02L2.81 2.81L1.39 4.22L6.17 9H5l7 7l.59-.59L15.17 18H5v2h12.17l2.61 2.61z"></svg:path>`,
})
export class IcTwotoneFileDownloadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
