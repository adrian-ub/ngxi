import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAirTrafficControlIcon],svg[tabler-air-traffic-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 3h2m-1 0v3M5.998 6h12.004a2 2 0 0 1 1.916 2.575l-1.8 6A2 2 0 0 1 16.202 16H7.798a2 2 0 0 1-1.916-1.425l-1.8-6A2 2 0 0 1 5.998 6"></svg:path><svg:path d="M8.5 6L10 16v5m5.5-15L14 16v5"></svg:path></svg:g>`,
})
export class TablerAirTrafficControlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
