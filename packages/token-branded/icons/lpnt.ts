import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLpntIcon],svg[token-branded-lpnt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#141B30" d="M5.4 3H21v15.6l-3.6-3.3V6.6H8.7z"></svg:path><svg:path fill="#E82F59" fill-rule="evenodd" d="M8.7 6.6H3V21h14.4v-5.7zm7.5 13.2v-2.4H6.6V7.8H4.2v12z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class TokenBrandedLpntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
