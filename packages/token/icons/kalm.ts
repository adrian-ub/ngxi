import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKalmIcon],svg[token-kalm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.938 6.375a1.688 1.688 0 1 0 0-3.375a1.688 1.688 0 0 0 0 3.375m0 5.063a1.687 1.687 0 1 0 0-3.375a1.687 1.687 0 0 0 0 3.374m0 5.063a1.688 1.688 0 1 0 0-3.375a1.688 1.688 0 0 0 0 3.375m0 4.5a1.687 1.687 0 1 0 0-3.375a1.687 1.687 0 0 0 0 3.375m8.437-12.937h3.375l-5.625 6.187L18.75 21h-3.375L9.75 14.25z"></svg:path>`,
})
export class TokenKalmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
