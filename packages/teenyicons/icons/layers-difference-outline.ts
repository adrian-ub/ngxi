import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLayersDifferenceOutlineIcon],svg[teenyicons-layers-difference-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 4.5v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3m-6-6h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3m-6-6V7m0-2.5H7m3.5 6H8m2.5 0V8M8 4.5h2.5V7m-6 1v2.5H7"></svg:path>`,
})
export class TeenyiconsLayersDifferenceOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
