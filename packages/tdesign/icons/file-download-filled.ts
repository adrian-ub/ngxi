import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileDownloadFilledIcon],svg[tdesign-file-download-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 1H3v22h11.846A6.5 6.5 0 0 1 21 11.814V6.586zM14.5 7.5V3L19 7.5z"></svg:path><svg:path fill="currentColor" d="M20 13v7.11l2.508-2.48l1.406 1.422L19 23.91l-4.914-4.858l1.406-1.422L18 20.11V13z"></svg:path>`,
})
export class TdesignFileDownloadFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
