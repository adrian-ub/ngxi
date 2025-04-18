import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentMultiple24FilledIcon],svg[fluent-comment-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 5a4 4 0 0 0-.244.007A3.25 3.25 0 0 1 7.75 3.5h8a5.75 5.75 0 0 1 5.75 5.75v4a3.25 3.25 0 0 1-1.507 2.743q.007-.12.007-.243v-6.5A4.25 4.25 0 0 0 15.75 5zM2 9.25A3.25 3.25 0 0 1 5.25 6h10.5A3.25 3.25 0 0 1 19 9.25v6.5A3.25 3.25 0 0 1 15.75 19h-5.002L6.99 21.76A1.25 1.25 0 0 1 5 20.752v-1.761a3.25 3.25 0 0 1-3-3.241z"></svg:path>`,
})
export class FluentCommentMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
