import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconBookmarkFill24Icon],svg[octicon-bookmark-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.69 2h10.56c.966 0 1.75.784 1.75 1.75v17.5a.75.75 0 0 1-1.218.585L12 17.21l-5.781 4.626A.75.75 0 0 1 5 21.253L4.94 3.756A1.75 1.75 0 0 1 6.69 2"></svg:path>`,
})
export class OcticonBookmarkFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
