import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarVinylRecordBrokenIcon],svg[solar-vinyl-record-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path stroke-linecap="round" d="M7.404 16.597a6.5 6.5 0 0 1 0-9.193m9.192 0a6.47 6.47 0 0 1 1.827 3.597m-1.827 5.596A6.5 6.5 0 0 0 17.768 15"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarVinylRecordBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
