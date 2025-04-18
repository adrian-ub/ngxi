import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedXetIcon],svg[token-branded-xet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#0681FF"><svg:path d="M8.963 4.125H3L8.26 12L3 19.875h5.963L14.576 12z"></svg:path><svg:path d="m12.686 8.648l2.723-3.96h4.472L14.89 12l4.984 7.313h-4.489l-2.435-3.555l-.44.506l2.526 3.611H21L15.69 12L21 4.125h-5.963l-2.773 3.971z"></svg:path></svg:g>`,
})
export class TokenBrandedXetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
