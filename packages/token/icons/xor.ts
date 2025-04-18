import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenXorIcon],svg[token-xor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.715 19.914A8.95 8.95 0 0 0 12 21a8.94 8.94 0 0 0 4.284-1.086L12 13.532z"></svg:path><svg:path fill="currentColor" d="M6.375 12v-1.687h5.062V9.187H6.375V7.5h11.25v1.687h-5.062v1.126h5.062V12h-4.883l4.78 7.109A9 9 0 0 0 21 11.999A9 9 0 0 0 12 3a9 9 0 0 0-5.522 16.109l4.78-7.11z"></svg:path>`,
})
export class TokenXorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
