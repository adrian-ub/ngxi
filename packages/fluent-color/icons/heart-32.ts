import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHeart32Icon],svg[fluent-color-heart-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHeart320)" d="M15.53 7.122C12.551 2.955 6.356 2.96 3.384 7.13a7.46 7.46 0 0 0 .609 9.409l11.275 12.14a1 1 0 0 0 1.464 0L28 16.584a7.48 7.48 0 0 0 .584-9.485c-3.01-4.156-9.216-4.114-12.171.081l-.417.592z"></svg:path><svg:defs><svg:lineargradient id="fluentColorHeart320" x1="-4.129" x2="11.375" y1="-3.143" y2="28.736" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHeart32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
