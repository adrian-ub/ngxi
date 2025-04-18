import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStopwatchBrokenIcon],svg[solar-stopwatch-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 13V9"></svg:path><svg:path d="M10 2h4M7.5 5.204A9 9 0 1 1 4.204 8.5"></svg:path></svg:g>`,
})
export class SolarStopwatchBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
