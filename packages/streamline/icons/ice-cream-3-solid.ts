import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineIceCream3SolidIcon],svg[streamline-ice-cream-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.475 2.405a2.476 2.476 0 0 0-4.95 0A2.476 2.476 0 1 0 7 6.226a2.476 2.476 0 1 0 2.475-3.82ZM6.029 13.358L3.934 8.43A3.73 3.73 0 0 0 7 7.95a3.73 3.73 0 0 0 3.06.481l-2.11 4.926a1.04 1.04 0 0 1-1.92 0Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineIceCream3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
