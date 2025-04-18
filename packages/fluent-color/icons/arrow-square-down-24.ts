import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorArrowSquareDown24Icon],svg[fluent-color-arrow-square-down-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorArrowSquareDown240)" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3z"></svg:path><svg:path fill="url(#fluentColorArrowSquareDown241)" d="m16.53 11.72l-.084-.072a.75.75 0 0 0-.976.072l-2.72 2.72V7.75l-.007-.102A.75.75 0 0 0 12 7l-.102.007a.75.75 0 0 0-.648.743v6.692L8.53 11.72l-.085-.073a.75.75 0 0 0-.976 1.133l4 4.002l.084.072a.75.75 0 0 0 .976-.072l4.001-4l.073-.085a.75.75 0 0 0-.073-.977"></svg:path><svg:defs><svg:lineargradient id="fluentColorArrowSquareDown240" x1="3.643" x2="17.786" y1="6.375" y2="17.625" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorArrowSquareDown241" x1="9.076" x2="16.75" y1="7.769" y2="25.272" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorArrowSquareDown24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
