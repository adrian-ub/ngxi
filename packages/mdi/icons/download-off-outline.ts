import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadOffOutlineIcon],svg[mdi-download-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l6 6H5l7 7l1.06-1.05L16.11 18H5v2h13.11l2.73 2.73zM11 5h2v4.8l2.6 2.6L19 9h-4V3H9v2.8l2 2z"></svg:path>`,
})
export class MdiDownloadOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
