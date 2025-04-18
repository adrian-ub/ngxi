import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedStptIcon],svg[token-branded-stpt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#24AAE1" d="M19.313 3H12l-7.312 9H12z"></svg:path><svg:path fill="#000" d="M19.313 12H12l-7.312 9H12z"></svg:path></svg:g>`,
})
export class TokenBrandedStptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
