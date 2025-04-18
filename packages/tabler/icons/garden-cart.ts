import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGardenCartIcon],svg[tabler-garden-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M6 8v11a1 1 0 0 0 1.806.591L11.5 14.5v.055"></svg:path><svg:path d="M6 8h15l-3.5 7l-7.1-.747a4 4 0 0 1-3.296-2.493L4.251 4.63A1 1 0 0 0 3.323 4H2"></svg:path></svg:g>`,
})
export class TablerGardenCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
