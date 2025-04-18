import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimCommentAltDotsIcon],svg[uim-comment-alt-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h11.586l3.707 3.707A1 1 0 0 0 22 21V5a3.003 3.003 0 0 0-3-3M8 11a1 1 0 1 1 1-1a1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1" opacity=".5"></svg:path><svg:circle cx="8" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="10" r="1" fill="currentColor"></svg:circle>`,
})
export class UimCommentAltDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
