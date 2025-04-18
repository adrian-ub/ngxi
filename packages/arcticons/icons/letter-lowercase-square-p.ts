import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterLowercaseSquarePIcon],svg[arcticons-letter-lowercase-square-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20 22.6a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V20a4 4 0 0 0-4-4h0a4 4 0 0 0-4 4m0-4v16"></svg:path>`,
})
export class ArcticonsLetterLowercaseSquarePIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
