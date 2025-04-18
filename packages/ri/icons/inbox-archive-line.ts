import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInboxArchiveLineIcon],svg[ri-inbox-archive-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm0 6H4v10h16zm-7 1v4h3l-4 4l-4-4h3v-4zm5.764-5H5.237l-1 2h15.527z"></svg:path>`,
})
export class RiInboxArchiveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
