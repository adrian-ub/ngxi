import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStopwatchLinearIcon],svg[solar-stopwatch-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 13V9"></svg:path><svg:path stroke-linecap="round" d="M10 2h4"></svg:path></svg:g>`,
})
export class SolarStopwatchLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
