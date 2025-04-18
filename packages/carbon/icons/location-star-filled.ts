import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLocationStarFilledIcon],svg[carbon-location-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m16 7l1.912 3.667l4.088.506l-3 2.753l.6 4.074l-3.6-2.292L12.4 18l.6-4.074l-3-2.753l4.2-.506z"></svg:path><svg:path fill="currentColor" d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m3.6 16L16 15.709L12.4 18l.6-4.074l-3-2.753l4.2-.507L16 7l1.912 3.667l4.088.506l-3 2.753Z"></svg:path>`,
})
export class CarbonLocationStarFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
