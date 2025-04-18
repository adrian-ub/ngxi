import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsPhoneIcon],svg[flat-color-icons-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="M39.1 7h-3.7C22.2 7.2 7.1 24.1 7 35.4v3.7c0 1 .8 1.9 1.9 1.9l7.5-.1c1 0 1.9-.9 1.9-1.9l.2-8.2l-4.7-4c0-2.6 10.5-13.1 13.2-13.2l4.3 4.7l7.9-.2c1 0 1.9-.9 1.9-1.9L41 8.9c0-1.1-.8-1.9-1.9-1.9"></svg:path>`,
})
export class FlatColorIconsPhoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
