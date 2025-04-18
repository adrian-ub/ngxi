import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardRightBrokenIcon],svg[solar-multiple-forward-right-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M6 10.13c1.613-1.153 3.454-1.56 5-1.56V6.227c0-.958 0-1.437.295-1.57c.295-.132.653.186 1.37.823l3.971 3.53c1.569 1.395 2.353 2.092 2.353 2.99s-.784 1.596-2.353 2.99l-3.972 3.53c-.716.637-1.074.956-1.37.823C11 19.21 11 18.732 11 17.773v-2.344c-3.6 0-7.5 1.714-9 4.571c0-2.431.377-4.378 1-5.925"></svg:path><svg:path d="m15.539 4.5l5.216 4.844a3.897 3.897 0 0 1-.126 5.823l-5.09 4.333"></svg:path></svg:g>`,
})
export class SolarMultipleForwardRightBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
