import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInboxUnarchiveLineIcon],svg[ri-inbox-unarchive-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm0 6H4v10h16zm-8 1l4 4h-3v4h-2v-4H8zm6.764-5H5.236l-.999 2h15.527z"></svg:path>`,
})
export class RiInboxUnarchiveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
