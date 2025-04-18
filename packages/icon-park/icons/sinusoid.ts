import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSinusoidIcon],svg[icon-park-sinusoid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24C4 24 6 4 14 4C22 4 23 19 24 24C25 29 28 44 35 44C42 44 44 24 44 24"></svg:path><svg:path d="M11 24H17"></svg:path><svg:path d="M31 24H37"></svg:path></svg:g>`,
})
export class IconParkSinusoidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
