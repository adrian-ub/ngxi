import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAuraIcon],svg[arcticons-aura-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.824 7.594c2.827 2.508 13.391 25.45 13.925 27.317c.533 1.867.373 5.495.373 5.495H42.5L27.881 7.594zm2.054 32.812H5.5l5.895-13.23c1.108 3.173 4.776 11.163 6.483 13.23"></svg:path>`,
})
export class ArcticonsAuraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
