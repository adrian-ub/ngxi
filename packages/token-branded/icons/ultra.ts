import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedUltraIcon],svg[token-branded-ultra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#6F3DE0"><svg:path d="M3 3v8.999a9 9 0 1 0 18 0V3h-3.6v8.999a5.4 5.4 0 1 1-10.8 0V3z"></svg:path><svg:path d="M10.2 3v9.001a1.8 1.8 0 1 0 3.6 0V3z"></svg:path></svg:g>`,
})
export class TokenBrandedUltraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
