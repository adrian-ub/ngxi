import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStethoscopeBrokenIcon],svg[solar-stethoscope-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 14.235V17a5 5 0 0 0 3 4.584m2.882.416a4.12 4.12 0 0 0 3.964-3"></svg:path><svg:path stroke-linecap="round" d="M12.286 3h.091c.313 0 .47 0 .601.012a3 3 0 0 1 2.725 2.724c.011.132.011.288.011.6v.9c0 .981-.202 1.916-.567 2.764M5.43 3h-.092c-.313 0-.47 0-.601.012a3 3 0 0 0-2.724 2.724C2 5.868 2 6.024 2 6.336v1.185a6.714 6.714 0 0 0 6.714 6.714a7 7 0 0 0 3-.673"></svg:path><svg:circle cx="19" cy="16" r="3"></svg:circle><svg:path stroke-linecap="round" d="M12 2v2M6 2v2"></svg:path></svg:g>`,
})
export class SolarStethoscopeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
