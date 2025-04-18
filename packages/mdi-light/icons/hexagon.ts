import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightHexagonIcon],svg[mdi-light-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.59 21l-4.9-8.5L6.6 4h9.81l4.91 8.5l-4.91 8.5zm9.24-16H7.18l-4.34 7.5L7.17 20h8.66l4.33-7.5z"></svg:path>`,
})
export class MdiLightHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
