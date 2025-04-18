import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMapRoadTwoIcon],svg[icon-park-map-road-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 4H6C4.89543 4 4 4.89543 4 6V42C4 43.1046 4.89543 44 6 44H42C43.1046 44 44 43.1046 44 42V6C44 4.89543 43.1046 4 42 4Z"></svg:path><svg:path stroke="#fff" d="M10 22L38 12"></svg:path><svg:path stroke="#fff" stroke-dasharray="2 6" d="M10 29L38 19"></svg:path><svg:path stroke="#fff" d="M10 36L38 26"></svg:path><svg:path stroke="#fff" d="M16 19L13 11"></svg:path><svg:path stroke="#fff" d="M37 36L34 28"></svg:path></svg:g>`,
})
export class IconParkMapRoadTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
