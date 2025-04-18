import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterLowercaseSquareYIcon],svg[arcticons-letter-lowercase-square-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M28 22.6V28a4 4 0 0 1-4 4h0a4 4 0 0 1-2.828-1.171"></svg:path><svg:path d="M28 16v6.6a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4V16"></svg:path></svg:g>`,
})
export class ArcticonsLetterLowercaseSquareYIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
