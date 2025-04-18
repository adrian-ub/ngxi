import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserCheckBrokenIcon],svg[solar-user-check-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="11" cy="6" r="4"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17 10.3l1.333 1.2L21 8.5"></svg:path><svg:path stroke-linecap="round" d="M18.998 18q.002-.246.002-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S3 22 11 22c2.231 0 3.84-.157 5-.437"></svg:path></svg:g>`,
})
export class SolarUserCheckBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
