import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorArrowSquare20Icon],svg[fluent-color-arrow-square-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorArrowSquare200)" d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></svg:path><svg:path fill="url(#fluentColorArrowSquare201)" d="M10.5 6.5a.5.5 0 0 0-1 0v5.793L6.854 9.646a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l3.5-3.5a.5.5 0 0 0-.708-.708L10.5 12.293z"></svg:path><svg:defs><svg:lineargradient id="fluentColorArrowSquare200" x1="3.5" x2="14.5" y1="5.625" y2="14.375" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorArrowSquare201" x1="7.538" x2="14" y1="6.615" y2="20.615" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorArrowSquare20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
