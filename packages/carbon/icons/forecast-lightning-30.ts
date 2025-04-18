import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonForecastLightning30Icon],svg[carbon-forecast-lightning-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 28a10 10 0 0 1 0-20h4v5l6-6l-6-6v5h-4a12 12 0 0 0 0 24Z"></svg:path><svg:path fill="currentColor" d="m11.67 24l-1.736-1l2.287-4H8.332l3.993-7l1.737 1l-2.284 4h3.89zM20 20h-4v2h4v2h-3v2h3v2h-4v2h4a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m8 10h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-2-8v6h2v-6z"></svg:path>`,
})
export class CarbonForecastLightning30Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
