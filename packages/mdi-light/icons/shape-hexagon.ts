import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightShapeHexagonIcon],svg[mdi-light-shape-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.593 21l-4.905-8.494L6.6 4h9.808l4.908 8.5l-4.908 8.5H6.593ZM15.83 5H7.177l-4.334 7.506L7.17 20h8.66l4.33-7.5L15.83 5Z"></svg:path>`,
})
export class MdiLightShapeHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
