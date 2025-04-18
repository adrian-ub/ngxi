import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkProportionalScalingIcon],svg[icon-park-proportional-scaling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M22.2679 7C23.0377 5.66667 24.9623 5.66667 25.7321 7L43.0526 37C43.8224 38.3333 42.8601 40 41.3205 40H6.67949C5.13989 40 4.17764 38.3333 4.94744 37L22.2679 7Z"></svg:path><svg:path stroke-linecap="round" d="M19 40L32 18"></svg:path><svg:path stroke-linecap="round" d="M32 40L38 29"></svg:path></svg:g>`,
})
export class IconParkProportionalScalingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
