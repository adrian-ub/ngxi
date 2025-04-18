import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIntersectIcon],svg[carbon-intersect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 24h-4v-2h4v-4h2v4a2 2 0 0 1-2 2M10 14H8v-4a2 2 0 0 1 2-2h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M28 8h-4V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 20H10v-4h4v-2h-4v-4H8v4H4V4h18v4h-4v2h4v4h2v-4h4Z"></svg:path>`,
})
export class CarbonIntersectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
