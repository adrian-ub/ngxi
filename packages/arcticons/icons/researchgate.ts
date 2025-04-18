import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsResearchgateIcon],svg[arcticons-researchgate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.36 38.035v-19.2h6.285c3.553 0 6.434 2.887 6.434 6.448s-2.88 6.448-6.434 6.448H11.36m6.287.002l6.288 6.297M36.64 13.781a3.815 3.815 0 1 0-7.63 0v3.887a3.815 3.815 0 1 0 7.63 0h-3.815"></svg:path>`,
})
export class ArcticonsResearchgateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
