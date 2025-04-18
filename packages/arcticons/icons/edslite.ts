import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEdsliteIcon],svg[arcticons-edslite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5m0 36.55v-6.29m10.64 1.88l-4.45-4.45M39.05 24h-6.29m1.88-10.64l-4.45 4.45M24 8.95v6.29m-10.64-1.88l4.45 4.45M8.95 24h6.29m-1.88 10.64l4.45-4.45"></svg:path>`,
})
export class ArcticonsEdsliteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
