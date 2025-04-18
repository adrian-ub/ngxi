import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLayersIcon],svg[carbon-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 24a1 1 0 0 1-.474-.12l-13-7l.948-1.76L16 21.864l12.526-6.744l.948 1.76l-13 7A1 1 0 0 1 16 24"></svg:path><svg:path fill="currentColor" d="M16 30a1 1 0 0 1-.474-.12l-13-7l.948-1.76L16 27.864l12.526-6.744l.948 1.76l-13 7A1 1 0 0 1 16 30m0-12a1 1 0 0 1-.474-.12l-13-7a1 1 0 0 1 0-1.76l13-7a1 1 0 0 1 .948 0l13 7a1 1 0 0 1 0 1.76l-13 7A1 1 0 0 1 16 18M5.11 10L16 15.864L26.89 10L16 4.136z"></svg:path>`,
})
export class CarbonLayersIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
