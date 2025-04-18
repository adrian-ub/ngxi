import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLetterLowercaseSquareSIcon],svg[arcticons-letter-lowercase-square-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.71 28.406c.73.613 1.52.894 3.29.894h.897a2.647 2.647 0 0 0 2.645-2.65h0A2.647 2.647 0 0 0 24.897 24h-1.794a2.647 2.647 0 0 1-2.645-2.65h0a2.647 2.647 0 0 1 2.645-2.65H24c1.77 0 2.56.281 3.29.894"></svg:path>`,
})
export class ArcticonsLetterLowercaseSquareSIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
