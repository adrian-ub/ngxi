import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimCommentDotsIcon],svg[uim-comment-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 2a10 10 0 0 0-7.743 16.33l-1.964 1.963A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20M8 13a1 1 0 1 1 1-1a1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1" opacity=".5"></svg:path><svg:circle cx="8" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="12" r="1" fill="currentColor"></svg:circle>`,
})
export class UimCommentDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
