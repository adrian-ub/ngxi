import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedModIcon],svg[token-branded-mod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#4283EB" d="M11.902 9.936L18.75 16.9V3z"></svg:path><svg:path fill="#253750" d="m5.25 21l8.804-8.957L5.556 3.41L5.25 3.1z"></svg:path></svg:g>`,
})
export class TokenBrandedModIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
