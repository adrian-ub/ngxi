import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCommentMultiple24Icon],svg[fluent-color-comment-multiple-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CD3E1D" d="M4.5 6.75A3.25 3.25 0 0 1 7.75 3.5h8a5.75 5.75 0 0 1 5.75 5.75v4a3.25 3.25 0 0 1-3.25 3.25H9A4.5 4.5 0 0 1 4.5 12z"></svg:path><svg:path fill="url(#fluentColorCommentMultiple240)" d="M2 9.25A3.25 3.25 0 0 1 5.25 6h10.5A3.25 3.25 0 0 1 19 9.25v6.5A3.25 3.25 0 0 1 15.75 19h-5.002L6.99 21.76A1.25 1.25 0 0 1 5 20.752v-1.761a3.25 3.25 0 0 1-3-3.241z"></svg:path><svg:defs><svg:radialgradient id="fluentColorCommentMultiple240" cx="0" cy="0" r="1" gradientTransform="matrix(20.39182 22.529 -40.89979 37.0199 -1.923 1.076)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FAB500"></svg:stop><svg:stop offset=".535" stop-color="#FE8401"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorCommentMultiple24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
