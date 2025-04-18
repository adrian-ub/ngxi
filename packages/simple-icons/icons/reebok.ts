import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsReebokIcon],svg[simple-icons-reebok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.991 11.48c2.753-1.1 4.467-1.732 9.009-2.84c-2.467.163-7.922.537-11.682 1.271l2.673 1.57m-8.56 3.651h3.6c.713-1.08 1.422-1.606 2.248-2.191a71 71 0 0 0-1.892-.701c-2.297 1.014-3.575 2.375-3.953 2.892m.709-3.928c-3.21 1.147-4.994 2.393-6.199 3.928h3.975c.387-.539 1.862-2.093 4.633-3.174a57 57 0 0 0-2.41-.754M8.79 8.788H0c8.862 1.6 13.133 3.66 20 6.572c-.587-.439-10.051-6.013-11.209-6.572"></svg:path>`,
})
export class SimpleIconsReebokIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
