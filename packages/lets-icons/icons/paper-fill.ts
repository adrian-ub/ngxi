import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPaperFillIcon],svg[lets-icons-paper-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 21V7c0-1.886 0-2.828.586-3.414S4.114 3 6 3h10c.832 0 1.478 0 2.004.027A4.5 4.5 0 0 0 14 7.5V11l-.099 9.967L11 20l-3 1l-3-1zm19-10h-5V7.5a2.5 2.5 0 0 1 5 0zM4 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsPaperFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
