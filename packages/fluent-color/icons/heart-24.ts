import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHeart24Icon],svg[fluent-color-heart-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHeart240)" d="m12.82 5.58l-.821.822l-.823-.823a5.375 5.375 0 0 0-7.602 7.601l7.896 7.896a.75.75 0 0 0 1.06 0l7.902-7.897a5.38 5.38 0 0 0-7.612-7.6"></svg:path><svg:defs><svg:lineargradient id="fluentColorHeart240" x1="-2.376" x2="8.135" y1="-.938" y2="21.378" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHeart24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
