import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWeigherBrokenIcon],svg[solar-weigher-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M8 18h8"></svg:path><svg:path d="m15.124 5.52l.425.071a2 2 0 0 1 1.528 2.716l-.666 1.664a1.27 1.27 0 0 1-1.486.76a12.06 12.06 0 0 0-5.85 0a1.27 1.27 0 0 1-1.487-.76l-.665-1.664A2 2 0 0 1 8.45 5.59l.425-.07A19 19 0 0 1 11 5.287m-.82 4.642l-.675-1.883"></svg:path></svg:g>`,
})
export class SolarWeigherBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
