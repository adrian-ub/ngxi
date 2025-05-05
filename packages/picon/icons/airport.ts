import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAirportIcon],svg[picon-airport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v2H2L0 6V5h2l5-5q1 0 1 1M0 2l1-1l5 1l1 5l-1 1l-2-4"></svg:path>`,
})
export class PiconAirportIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
