import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedFoomIcon],svg[token-branded-foom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="red" d="M5.813 3.563H21v15.186H5.813z"></svg:path><svg:path fill="#00F8FF" d="M3 5.813h15.749v14.624H3z"></svg:path><svg:path fill="#000" d="M4.126 4.69h15.749v14.624H4.126z"></svg:path><svg:path fill="#00F8FF" d="M8.063 9.75h6.75l-.619.844H9.751V12h4.865l-.742.844H9.75v2.531H8.063z"></svg:path><svg:path fill="red" d="M9.188 8.628h6.75l-.619.843h-4.443v1.406h4.865l-.742.844h-4.123v2.531H9.188z"></svg:path><svg:path fill="#fff" d="M8.625 9.188h6.75l-.62.844h-4.443v1.406h4.866l-.743.844h-4.123v2.53H8.625z"></svg:path></svg:g>`,
})
export class TokenBrandedFoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
