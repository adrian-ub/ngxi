import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassNorthLightIcon],svg[lets-icons-compass-north-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="m7.558 20.378l4.397-9.283a.05.05 0 0 1 .09 0l4.397 9.283a.05.05 0 0 1-.065.067L12.02 18.51a.05.05 0 0 0-.04 0l-4.357 1.936a.05.05 0 0 1-.065-.067Z"></svg:path><svg:path d="M12 11.5v7"></svg:path><svg:path stroke-linecap="round" d="M10.5 8.5V3.68c0-.05.067-.069.093-.025l2.814 4.69c.026.044.093.025.093-.026V3.5"></svg:path></svg:g>`,
})
export class LetsIconsCompassNorthLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
