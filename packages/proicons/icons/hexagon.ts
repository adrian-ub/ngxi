import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsHexagonIcon],svg[proicons-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.42 3.173a3.16 3.16 0 0 1 3.16 0l5.275 3.046a3.16 3.16 0 0 1 1.579 2.735v6.092a3.16 3.16 0 0 1-1.58 2.735l-5.275 3.046a3.16 3.16 0 0 1-3.158 0L5.145 17.78a3.16 3.16 0 0 1-1.579-2.735V8.954c0-1.128.602-2.17 1.58-2.735z"></svg:path>`,
})
export class ProiconsHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
