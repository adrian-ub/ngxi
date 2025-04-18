import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserMinusBrokenIcon],svg[solar-user-minus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="10" cy="6" r="4"></svg:circle><svg:path stroke-linecap="round" d="M21 10h-4m.998 8q.002-.246.002-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S2 22 10 22c2.231 0 3.84-.157 5-.437"></svg:path></svg:g>`,
})
export class SolarUserMinusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
