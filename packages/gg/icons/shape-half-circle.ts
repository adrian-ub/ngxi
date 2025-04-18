import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggShapeHalfCircleIcon],svg[gg-shape-half-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a8 8 0 1 0 0 16v-3a5 5 0 0 1 0-10z"></svg:path>`,
})
export class GgShapeHalfCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
