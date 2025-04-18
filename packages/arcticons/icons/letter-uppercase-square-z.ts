import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterUppercaseSquareZIcon],svg[arcticons-letter-uppercase-square-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsLetterUppercaseSquareZ0" d="M18.7 16h10.6L18.7 32h10.6"></svg:path></svg:defs><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:use href="#arcticonsLetterUppercaseSquareZ0"></svg:use><svg:use href="#arcticonsLetterUppercaseSquareZ0"></svg:use></svg:g>`,
})
export class ArcticonsLetterUppercaseSquareZIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
