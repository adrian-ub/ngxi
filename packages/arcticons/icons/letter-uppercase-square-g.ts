import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterUppercaseSquareGIcon],svg[arcticons-letter-uppercase-square-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.3 21.3A5.3 5.3 0 0 0 24 16h0a5.3 5.3 0 0 0-5.3 5.3v5.4A5.3 5.3 0 0 0 24 32h0a5.3 5.3 0 0 0 5.3-5.3H24"></svg:path>`,
})
export class ArcticonsLetterUppercaseSquareGIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
