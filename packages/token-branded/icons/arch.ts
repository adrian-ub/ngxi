import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedArchIcon],svg[token-branded-arch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#373737" d="M7.932 7.932L3 3v18h18l-3.6-3.6H6.6v-6.354c0-1.02.36-2.22 1.332-3.12z"></svg:path><svg:path fill="#FCFEFB" d="M6.6 11.045c0-1.02.36-2.22 1.332-3.12L12 12l-5.4 5.4z"></svg:path><svg:path fill="#D3DDFF" d="M17.4 17.4H6.6L12 12z"></svg:path><svg:path fill="#FCFEFB" d="M17.4 17.4L21 21V3H3l4.932 4.932C8.772 7.152 10.08 6.6 12 6.6c4.128 0 5.4 2.544 5.4 4.446z"></svg:path></svg:g>`,
})
export class TokenBrandedArchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
