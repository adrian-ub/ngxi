import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRainHeavyIcon],svg[carbon-rain-heavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 30a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A1 1 0 0 1 17 30m-9 0a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A1 1 0 0 1 8 30"></svg:path><svg:path fill="currentColor" d="M30 15.5a6.53 6.53 0 0 0-5.2-6.364a8.994 8.994 0 0 0-17.6 0a6.49 6.49 0 0 0-1.497 12.222l-1.597 3.195a1 1 0 1 0 1.789.894L7.617 22h6.765l-1.276 2.553a1 1 0 1 0 1.789.894L16.618 22h6.764l-1.276 2.553a1 1 0 1 0 1.789.894l1.944-3.89A6.51 6.51 0 0 0 30 15.5M23.5 20h-15a4.498 4.498 0 0 1-.356-8.981l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.498 4.498 0 0 1 23.5 20"></svg:path>`,
})
export class CarbonRainHeavyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
