import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMapIcon],svg[proicons-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M8.496 4.439L4.247 6.91a1 1 0 0 0-.497.864V18.26a1 1 0 0 0 1.503.865l3.243-1.887a1.5 1.5 0 0 1 1.508 0l3.992 2.322a1.5 1.5 0 0 0 1.508 0l4.249-2.472a1 1 0 0 0 .497-.864V5.739a1 1 0 0 0-1.503-.865l-3.243 1.887a1.5 1.5 0 0 1-1.508 0L10.004 4.44a1.5 1.5 0 0 0-1.508 0Zm.754.311v11.8m5.5-9.1v11.8"></svg:path>`,
})
export class ProiconsMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
