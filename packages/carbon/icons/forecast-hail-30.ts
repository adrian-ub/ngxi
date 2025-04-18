import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonForecastHail30Icon],svg[carbon-forecast-hail-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15.586L12.586 12L14 13.413L10.413 17zm6-.001L16.586 14L18 15.413L16.414 17z"></svg:path><svg:circle cx="10.5" cy="22.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="7.5" cy="18.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="13.5" cy="18.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14 28a10 10 0 0 1 0-20h4v5l6-6l-6-6v5h-4a12 12 0 0 0 0 24Z"></svg:path><svg:path fill="currentColor" d="M20 20h-4v2h4v2h-3v2h3v2h-4v2h4a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m8 10h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-2-8v6h2v-6z"></svg:path>`,
})
export class CarbonForecastHail30Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
