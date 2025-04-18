import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggShapeTriangleIcon],svg[gg-shape-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.66 5L3 20h17.32zm0 6l-3.464 6h6.928z" clip-rule="evenodd"></svg:path>`,
})
export class GgShapeTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
