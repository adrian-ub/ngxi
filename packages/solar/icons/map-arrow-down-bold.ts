import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowDownBoldIcon],svg[solar-map-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.165 4.497l7.362 16.51c.59 1.324 2.355 1.324 2.946 0l7.362-16.51c.667-1.495-.814-3.047-2.202-2.306L12.73 5.343c-.459.245-1 .245-1.458 0L5.367 2.191c-1.388-.74-2.87.81-2.202 2.306"></svg:path>`,
})
export class SolarMapArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
