import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterLowercaseSquareCIcon],svg[arcticons-letter-lowercase-square-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.737 27.285a4 4 0 0 1-3.474 2.015h0a4 4 0 0 1-4-4v-2.6a4 4 0 0 1 4-4h0c1.484 0 2.78.808 3.47 2.008"></svg:path>`,
})
export class ArcticonsLetterLowercaseSquareCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
