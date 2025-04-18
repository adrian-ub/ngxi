import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCeurIcon],svg[token-branded-ceur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3BC77B" d="M17.338 11.997c1 0 1.905-.399 2.563-1.05l.528 1.77a5.36 5.36 0 0 1-8.052-2.406H9.578l.55-1.124h1.94a5.4 5.4 0 0 1-.057-1.123h-1.798l.545-1.124h1.428a5.355 5.355 0 0 1 8.226-2.978l-.562 1.73a3.642 3.642 0 0 0-5.883 1.248h5.473l-.422 1.124h-5.321c-.03.376 0 .755.084 1.123h5.03l-.422 1.124h-4.13a3.65 3.65 0 0 0 3.08 1.686M3.571 13.402A7.59 7.59 0 0 1 8.64 6.243a9.7 9.7 0 0 0 .225 2.338a5.338 5.338 0 1 0 7.08 7.18a10 10 0 0 0 2.326.287a7.585 7.585 0 0 1-14.7-2.646"></svg:path>`,
})
export class TokenBrandedCeurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
