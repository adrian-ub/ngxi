import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterUppercaseCircleZIcon],svg[arcticons-letter-uppercase-circle-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsLetterUppercaseCircleZ0" d="M18.7 16h10.6L18.7 32h10.6"></svg:path></svg:defs><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:use href="#arcticonsLetterUppercaseCircleZ0"></svg:use><svg:use href="#arcticonsLetterUppercaseCircleZ0"></svg:use></svg:g>`,
})
export class ArcticonsLetterUppercaseCircleZIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
