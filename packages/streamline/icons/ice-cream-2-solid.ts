import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineIceCream2SolidIcon],svg[streamline-ice-cream-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.705 1.449C2.705.649 3.354 0 4.154 0h5.692c.8 0 1.449.649 1.449 1.449V8.09c0 .8-.649 1.449-1.449 1.449H4.154A1.45 1.45 0 0 1 2.705 8.09zm5.437 11.41v-2H5.858v2a1.141 1.141 0 1 0 2.284 0M5.346 2.374c.345 0 .625.28.625.625v3.5a.625.625 0 1 1-1.25 0V3c0-.345.28-.625.625-.625ZM9.279 3a.625.625 0 0 0-1.25 0v3.5a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineIceCream2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
