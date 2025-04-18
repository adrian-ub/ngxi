import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLocationHazardFilledIcon],svg[carbon-location-hazard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M16 22a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 22m-1.125-6h2.25V7h-2.25Z"></svg:path><svg:path fill="currentColor" d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m-1.125 5h2.25v9h-2.25ZM16 22a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 22"></svg:path>`,
})
export class CarbonLocationHazardFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
