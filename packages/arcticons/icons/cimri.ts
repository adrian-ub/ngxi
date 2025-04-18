import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCimriIcon],svg[arcticons-cimri-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.005 23.94a2.27 2.27 0 0 1 2.263-2.262h0a2.27 2.27 0 0 1 2.262 2.263v3.733m-4.525-5.996v6.109m4.525-3.847a2.27 2.27 0 0 1 2.263-2.262h0a2.27 2.27 0 0 1 2.262 2.263v3.733m2.464-3.734a2.27 2.27 0 0 1 2.262-2.262m-2.262 0v6.109"></svg:path><svg:circle cx="17.455" cy="18.963" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.455 21.678v6.109m-2.248-1.131c-.34.679-1.132 1.131-1.923 1.131h0a2.27 2.27 0 0 1-2.263-2.262v-1.471a2.27 2.27 0 0 1 2.263-2.263h0c.791 0 1.583.453 1.923 1.131"></svg:path><svg:circle cx="36.229" cy="18.963" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.229 21.678v6.109"></svg:path>`,
})
export class ArcticonsCimriIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
