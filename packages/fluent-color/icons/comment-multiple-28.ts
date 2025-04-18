import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCommentMultiple28Icon],svg[fluent-color-comment-multiple-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CD3E1D" d="M4.5 6.75A3.25 3.25 0 0 1 7.75 3.5h12a5.75 5.75 0 0 1 5.75 5.75v7a3.25 3.25 0 0 1-3.25 3.25H9A4.5 4.5 0 0 1 4.5 15z"></svg:path><svg:path fill="url(#fluentColorCommentMultiple280)" d="M6.69 25.87c.18.09.37.13.56.13h.01c.26 0 .52-.08.74-.25L13.04 22h6.71c1.79 0 3.25-1.46 3.25-3.25v-9.5C23 7.46 21.54 6 19.75 6H5.25C3.46 6 2 7.46 2 9.25v9.5C2 20.54 3.46 22 5.25 22H6v2.75c0 .48.26.91.69 1.12"></svg:path><svg:defs><svg:radialgradient id="fluentColorCommentMultiple280" cx="0" cy="0" r="1" gradientTransform="matrix(25.19003 28.15373 -51.04894 45.6751 -2.846 -.154)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FAB500"></svg:stop><svg:stop offset=".535" stop-color="#FE8401"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorCommentMultiple28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
