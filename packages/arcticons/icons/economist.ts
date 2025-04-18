import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEconomistIcon],svg[arcticons-economist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.592 24h5.426m-5.426 13.5v-27m0 0h10.234v3.579m-1.08 13.65v-8.367m2.139 13.294l-.321 4.844H21.592m0 0h-7.548m7.548-27h-7.548M27.018 24c2.06 0 3.728 1.67 3.728 3.729m0-8.367A4.64 4.64 0 0 1 26.11 24M14.044 10.5c1.6 0 2.897 1.297 2.897 2.897v21.206c0 1.6-1.297 2.897-2.897 2.897"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsEconomistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
