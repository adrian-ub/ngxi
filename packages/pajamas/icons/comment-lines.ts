import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasCommentLinesIcon],svg[pajamas-comment-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4.063L1.28 15.78A.75.75 0 0 1 0 15.25zm3-1.5A1.5 1.5 0 0 0 1.5 4v9.44l1.723-1.72l.22-.22H13a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 13 2.5zm0 5.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 3 8.25M3.75 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasCommentLinesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
