import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkScaleIcon],svg[icon-park-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 6H42V18"></svg:path><svg:path d="M31 29L19 29L19 17"></svg:path><svg:path d="M42 6L19 29"></svg:path><svg:path d="M22 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V26"></svg:path></svg:g>`,
})
export class IconParkScaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
