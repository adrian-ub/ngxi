import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterLowercaseSquareGIcon],svg[arcticons-letter-lowercase-square-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M28 16v12a4 4 0 0 1-4 4h0a4 4 0 0 1-2.828-1.171"></svg:path><svg:rect width="8" height="10.6" x="20" y="16" rx="4" ry="4" transform="rotate(180 24 21.3)"></svg:rect></svg:g>`,
})
export class ArcticonsLetterLowercaseSquareGIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
