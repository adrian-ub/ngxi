import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSimCardsBrokenIcon],svg[solar-sim-cards-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6a3.86 3.86 0 0 1 2.731 1.136l4.133 4.133A3.86 3.86 0 0 1 18 14c0 3.771 0 5.657-1.172 6.828S13.771 22 10 22s-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828M18 17.899c1.3-.128 2.175-.417 2.828-1.07C22 15.656 22 13.77 22 10a3.86 3.86 0 0 0-1.136-2.731L20.597 7M6.102 6c.127-1.3.416-2.175 1.07-2.828C8.343 2 10.229 2 14 2a3.86 3.86 0 0 1 2.731 1.136l.269.268"></svg:path><svg:path d="M10 14H9c-.943 0-1.414 0-1.707.293S7 15.057 7 16v1c0 .943 0 1.414.293 1.707S8.057 19 9 19h1m0-5h1c.943 0 1.414 0 1.707.293S13 15.057 13 16v.5M10 14v2.5m0 2.5h1c.943 0 1.414 0 1.707-.293S13 17.943 13 17v-.5M10 19v-2.5m0 0h3"></svg:path></svg:g>`,
})
export class SolarSimCardsBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
