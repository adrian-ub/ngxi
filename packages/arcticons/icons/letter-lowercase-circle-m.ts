import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterLowercaseCircleMIcon],svg[arcticons-letter-lowercase-circle-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsLetterLowercaseCircleM0" d="M16 22.7a4 4 0 0 1 4-4a4 4 0 0 1 4 4v6.6m-8-10.6v10.6m8-6.6a4 4 0 0 1 4-4a4 4 0 0 1 4 4v6.6"></svg:path></svg:defs><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:use href="#arcticonsLetterLowercaseCircleM0"></svg:use><svg:use href="#arcticonsLetterLowercaseCircleM0"></svg:use></svg:g>`,
})
export class ArcticonsLetterLowercaseCircleMIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
