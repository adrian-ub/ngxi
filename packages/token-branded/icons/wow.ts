import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedWowIcon],svg[token-branded-wow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F3BA2F" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M12 19.875a7.875 7.875 0 1 0 0-15.75a7.875 7.875 0 0 0 0 15.75M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M9.75 10.313c.622 0 1.126-.63 1.126-1.407c0-.776-.504-1.406-1.126-1.406c-.62 0-1.125.63-1.125 1.406c0 .777.504 1.406 1.125 1.406m4.5.001c.622 0 1.125-.63 1.125-1.407c0-.776-.503-1.406-1.125-1.406c-.621 0-1.124.63-1.124 1.406c0 .777.503 1.406 1.124 1.406M12 18.188c1.554 0 2.813-1.511 2.813-3.375s-1.26-3.376-2.812-3.376c-1.554 0-2.813 1.512-2.813 3.376s1.26 3.374 2.813 3.374"></svg:path></svg:g>`,
})
export class TokenBrandedWowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
