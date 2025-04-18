import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCommentMultiple20Icon],svg[fluent-color-comment-multiple-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CD3E1D" d="M4 5.5A2.5 2.5 0 0 1 6.5 3h7A4.5 4.5 0 0 1 18 7.5v4a2.5 2.5 0 0 1-2.5 2.5h-7A4.5 4.5 0 0 1 4 9.5z"></svg:path><svg:path fill="url(#fluentColorCommentMultiple200)" d="M2 7.5A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v6a2.5 2.5 0 0 1-2.5 2.5H9.057L6.59 17.803A1 1 0 0 1 5 16.995V16h-.5A2.5 2.5 0 0 1 2 13.5z"></svg:path><svg:defs><svg:radialgradient id="fluentColorCommentMultiple200" cx="0" cy="0" r="1" gradientTransform="rotate(47.452 -1.754 -.9)scale(24.8346 45.1436)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FAB500"></svg:stop><svg:stop offset=".535" stop-color="#FE8401"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorCommentMultiple20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
