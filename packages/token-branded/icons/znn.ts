import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedZnnIcon],svg[token-branded-znn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00FF65" fill-rule="evenodd" d="M6.375 3h11.25v2.16l-6.868 4.59h6.868V21h-2.036l-6.964-5.962V21h-2.25V9.682l7.037-4.432H6.375zm2.25 9h6.75v5.625z" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedZnnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
