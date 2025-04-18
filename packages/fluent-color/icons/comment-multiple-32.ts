import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCommentMultiple32Icon],svg[fluent-color-comment-multiple-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CD3E1D" d="M6.5 8A4.5 4.5 0 0 1 11 3.5h10.5a8 8 0 0 1 8 8V17a4.5 4.5 0 0 1-4.5 4.5H11A4.5 4.5 0 0 1 6.5 17z"></svg:path><svg:path fill="url(#fluentColorCommentMultiple320)" d="M3 11.5A4.5 4.5 0 0 1 7.5 7h14a4.5 4.5 0 0 1 4.5 4.5v9a4.5 4.5 0 0 1-4.5 4.5h-4.89l-6.205 4.692C9.417 30.439 8 29.734 8 28.495V25h-.5A4.5 4.5 0 0 1 3 20.5z"></svg:path><svg:defs><svg:radialgradient id="fluentColorCommentMultiple320" cx="0" cy="0" r="1" gradientTransform="matrix(27.58891 32.3739 -58.31724 49.6977 -2.308 -.076)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FAB500"></svg:stop><svg:stop offset=".535" stop-color="#FE8401"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorCommentMultiple32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
