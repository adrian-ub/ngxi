import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVanarIcon],svg[token-branded-vanar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#03D9AF"><svg:path d="m14.248 20.1l2.25-4.052L9.75 3.9h-4.5L3 7.95h4.503zm4.5-8.101L21 7.949L18.749 3.9H14.25l-2.249 4.05H16.5z"></svg:path><svg:path d="m16.5 7.95l2.249-4.05H14.25l-2.249 4.05zm-8.997 0L9.75 3.9h-4.5L3 7.95z"></svg:path></svg:g>`,
})
export class TokenBrandedVanarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
