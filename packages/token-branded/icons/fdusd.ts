import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedFdusdIcon],svg[token-branded-fdusd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00E98D" d="M3.93 16.655h9.932V21H3.931z"></svg:path><svg:path fill="#fff" d="M20.07 3H9.516v10.552H20.07V9.828h-6.207V6.724h6.207z"></svg:path></svg:g>`,
})
export class TokenBrandedFdusdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
