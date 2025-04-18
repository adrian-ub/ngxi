import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonForecastHailIcon],svg[carbon-forecast-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18A10 10 0 1 1 16 8h4v5l6-6l-6-6v5h-4a12 12 0 1 0 12 12Z"></svg:path><svg:circle cx="14.5" cy="23.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="11.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="17.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13 16.586L16.586 13L18 14.413L14.413 18zm6 0L22.586 13L24 14.413L20.413 18z"></svg:path>`,
})
export class CarbonForecastHailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
