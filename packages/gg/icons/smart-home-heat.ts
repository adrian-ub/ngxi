import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSmartHomeHeatIcon],svg[gg-smart-home-heat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 11H7a1 1 0 1 0 0 2h3v2H7a3 3 0 1 1 0-6h10a3 3 0 1 1 0 6h-3v-2h3a1 1 0 1 0 0-2"></svg:path><svg:path fill-rule="evenodd" d="M0 12a7 7 0 0 1 7-7h10a7 7 0 1 1 0 14H7a7 7 0 0 1-7-7m7-5h10a5 5 0 0 1 0 10H7A5 5 0 0 1 7 7" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSmartHomeHeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
