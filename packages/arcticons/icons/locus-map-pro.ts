import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLocusMapProIcon],svg[arcticons-locus-map-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24h7.899v1.297a4 4 0 1 0 3 0V24H24m0 18.5v-7.899h1.297a4 4 0 1 0 0-3H24V24m18.5 0h-7.899v-1.297a4 4 0 1 0-3 0V24H24m0-18.5v7.899h-1.297a4 4 0 1 0 0 3H24V24"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsLocusMapProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
