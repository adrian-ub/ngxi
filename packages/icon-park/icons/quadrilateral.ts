import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkQuadrilateralIcon],svg[icon-park-quadrilateral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M28.038 8H7C5.34315 8 4 9.34315 4 11V37C4 38.6569 5.34315 40 7 40H39.413C41.5764 40 43.0286 37.7796 42.1614 35.7975L30.7864 9.79754C30.3087 8.70558 29.2298 8 28.038 8Z"></svg:path>`,
})
export class IconParkQuadrilateralIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
