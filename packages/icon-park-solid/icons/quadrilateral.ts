import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidQuadrilateralIcon],svg[icon-park-solid-quadrilateral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="4" d="M28.038 8H7a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h32.413c2.163 0 3.616-2.22 2.748-4.203l-11.375-26A3 3 0 0 0 28.038 8Z"></svg:path>`,
})
export class IconParkSolidQuadrilateralIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
