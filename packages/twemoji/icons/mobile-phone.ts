import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiMobilePhoneIcon],svg[twemoji-mobile-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="M11 36s-4 0-4-4V4s0-4 4-4h14s4 0 4 4v28s0 4-4 4z"></svg:path><svg:path fill="#55ACEE" d="M9 5h18v26H9z"></svg:path>`,
})
export class TwemojiMobilePhoneIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
