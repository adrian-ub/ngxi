import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconBookmark24Icon],svg[octicon-bookmark-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.75C5 2.784 5.784 2 6.75 2h10.5c.966 0 1.75.784 1.75 1.75v17.5a.75.75 0 0 1-1.218.586L12 17.21l-5.781 4.625A.75.75 0 0 1 5 21.25Zm1.75-.25a.25.25 0 0 0-.25.25v15.94l5.031-4.026a.75.75 0 0 1 .938 0L17.5 19.69V3.75a.25.25 0 0 0-.25-.25Z"></svg:path>`,
})
export class OcticonBookmark24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
