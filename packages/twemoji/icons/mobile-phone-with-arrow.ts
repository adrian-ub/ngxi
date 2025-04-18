import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiMobilePhoneWithArrowIcon],svg[twemoji-mobile-phone-with-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="M18 36s-4 0-4-4V4s0-4 4-4h14s4 0 4 4v28s0 4-4 4z"></svg:path><svg:path fill="#55ACEE" d="M16 5h18v26H16zm-3 11s1 1 1 2s-1 2-1 2l-5 5c-1 1-3 1-3-1v-3H2s-2 0-2-2v-2c0-2 2-2 2-2h3v-3c0-2 2-2 3-1z"></svg:path>`,
})
export class TwemojiMobilePhoneWithArrowIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
