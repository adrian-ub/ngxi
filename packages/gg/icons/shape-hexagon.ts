import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggShapeHexagonIcon],svg[gg-shape-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6 15.235l6 3.333l6-3.333v-6.47l-6-3.333l-6 3.333zM12 2L3 7v10l9 5l9-5V7z" clip-rule="evenodd"></svg:path>`,
})
export class GgShapeHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
