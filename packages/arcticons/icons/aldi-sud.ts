import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAldiSudIcon],svg[arcticons-aldi-sud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.875 10.499L14.5 27.501m10.297-17.002l-6.375 17.002m10.297-17.002l-6.375 17.002m7.117-12.752h.871M27.867 19h4.039m-5.632 4.251H33.5m-5.856 15.162v-5.436h.883a2.726 2.726 0 0 1 2.719 2.718h0a2.726 2.726 0 0 1-2.719 2.718zm-10.822-.611c.34.407.748.611 1.36.611h.815c.748 0 1.36-.611 1.36-1.359h0c0-.747-.612-1.36-1.36-1.36h-.884c-.747 0-1.359-.61-1.359-1.358h0c0-.748.612-1.36 1.36-1.36h.815c.612 0 1.02.136 1.36.612m1.881-.611v3.601c0 1.02.816 1.835 1.768 1.835s1.767-.815 1.767-1.835v-3.601"></svg:path><svg:circle cx="25.705" cy="31.032" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.171" cy="31.032" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsAldiSudIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
