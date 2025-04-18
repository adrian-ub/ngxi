import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLocationInfoFilledIcon],svg[carbon-location-info-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2C9.935 2 5 6.936 5 13c0 2.393.766 4.673 2.216 6.6c0 0 .3.394.348.451L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13c0-6.064-4.935-11-11-11m-.5 4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M20 20h-8v-2h3v-5h-2v-2h4v7h3z"></svg:path><svg:path fill="none" d="M15.5 6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M20 20h-8v-2h3v-5h-2v-2h4v7h3z"></svg:path>`,
})
export class CarbonLocationInfoFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
