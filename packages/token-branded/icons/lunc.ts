import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLuncIcon],svg[token-branded-lunc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFD83D" d="M20.584 14.719A11.537 11.537 0 0 1 6.296 5.034a9.004 9.004 0 1 0 14.294 9.68h-.006z"></svg:path><svg:path fill="#FB6E04" d="M20.978 12.603a11.51 11.51 0 0 1-6.359-9.218a9.004 9.004 0 0 1 6.36 9.218"></svg:path><svg:path fill="#FFD83D" d="M20.68 9.603c-.473-.14-.996-.315-1.598-.512c-1.188-.388-2.657-.872-4.514-1.385c-2.802-.77-5.2-1.93-6.995-3.545A9.01 9.01 0 0 1 20.68 9.603"></svg:path></svg:g>`,
})
export class TokenBrandedLuncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
