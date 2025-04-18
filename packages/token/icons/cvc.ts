import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenCvcIcon],svg[token-cvc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.592 19.313c2.84 0 5.366-2.284 5.72-5.024v-.039H21A7.48 7.48 0 0 1 13.592 21h-3.15C6.336 21 3 17.67 3 13.575v-3.15C3 6.33 6.341 3 10.442 3h3.15A7.48 7.48 0 0 1 21 9.75h-1.688c-.354-2.74-2.88-5.062-5.72-5.062h-3.15a5.88 5.88 0 0 0-5.755 5.737v3.15c0 3.071 2.672 5.738 5.755 5.738zM12 8.625c.928 0 1.687.793 1.687 1.772c0 .686-.37 1.282-.91 1.575l.624 2.84h-2.802l.625-2.84a1.78 1.78 0 0 1-.912-1.575A1.73 1.73 0 0 1 12 8.625"></svg:path>`,
})
export class TokenCvcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
