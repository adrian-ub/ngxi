import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDuaIcon],svg[token-branded-dua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#1E1E1E" d="M5.35 3a2.346 2.346 0 0 0-2.346 2.346v13.308A2.35 2.35 0 0 0 5.35 21h11.154a4.5 4.5 0 0 0 .664-8.95A4.555 4.555 0 0 0 16.454 3z"></svg:path><svg:path fill="#86D900" d="M4.692 6.938A1.687 1.687 0 0 1 6.379 5.25h7.875a3.375 3.375 0 1 1 0 6.75a3.375 3.375 0 1 1-3.375 3.375v.281a3.094 3.094 0 0 1-6.187 0z"></svg:path></svg:g>`,
})
export class TokenBrandedDuaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
