import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRainDrizzleIcon],svg[carbon-rain-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 30a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A1 1 0 0 1 11 30"></svg:path><svg:path fill="currentColor" d="M24.8 9.136a8.994 8.994 0 0 0-17.6 0A6.497 6.497 0 0 0 8.5 22h10.881l-1.276 2.553a1 1 0 0 0 1.789.894L21.618 22H23.5a6.497 6.497 0 0 0 1.3-12.864M23.5 20h-15a4.498 4.498 0 0 1-.356-8.981l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.498 4.498 0 0 1 23.5 20"></svg:path>`,
})
export class CarbonRainDrizzleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
