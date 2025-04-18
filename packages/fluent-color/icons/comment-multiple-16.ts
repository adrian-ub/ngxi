import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCommentMultiple16Icon],svg[fluent-color-comment-multiple-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CD3E1D" d="M3 4a2 2 0 0 1 2-2h6a4 4 0 0 1 4 4v3a2 2 0 0 1-2 2H7.5A4.5 4.5 0 0 1 3 6.5z"></svg:path><svg:path fill="url(#fluentColorCommentMultiple160)" d="M1 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7.073l-2.485 1.807A1 1 0 0 1 3 13.998V13a2 2 0 0 1-2-2z"></svg:path><svg:defs><svg:radialgradient id="fluentColorCommentMultiple160" cx="0" cy="0" r="1" gradientTransform="matrix(14.39416 15.48454 -28.1757 26.19164 -1.769 .615)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FAB500"></svg:stop><svg:stop offset=".535" stop-color="#FE8401"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorCommentMultiple16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
