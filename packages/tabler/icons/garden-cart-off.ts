import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGardenCartOffIcon],svg[tabler-garden-cart-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15.733 15.732a2.5 2.5 0 1 0 3.544 3.527M6 8v11a1 1 0 0 0 1.806.591L11.5 14.5v.055"></svg:path><svg:path d="M6 8h2m4 0h9l-3 6.01m-3.319.693l-4.276-.45a4 4 0 0 1-3.296-2.493L4.256 4.63A1 1 0 0 0 3.328 4H2.005M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerGardenCartOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
