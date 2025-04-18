import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInboxArchiveFillIcon],svg[ri-inbox-archive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004zm9 11v-4h-2v4H8l4 4l4-4zm6.764-7l-1-2H5.237l-1 2z"></svg:path>`,
})
export class RiInboxArchiveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
