import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiExpressionlessFaceIcon],svg[openmoji-expressionless-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCEA2B" d="M36 13c-12.682 0-23 10.318-23 23s10.318 23 23 23s23-10.318 23-23s-10.318-23-23-23"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="36" r="23"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 43h18M25 31h5m13 0h5"></svg:path></svg:g>`,
})
export class OpenmojiExpressionlessFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
