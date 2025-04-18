import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHorizonIcon],svg[arcticons-horizon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.337 42.266l15.397.055M20.8 42.293v-6.276h6.304v6.287"></svg:path><svg:rect width="37" height="27.453" x="5.5" y="5.679" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.387" ry="2.387"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 26.924h37M9.755 13.864v-3.676h3.898m-.551 16.736c-3.908-4.917.614-9.437 3.57-9.428c1.289-7.22 15.045-10.31 16.68 2.287c2.937 1.662 3.704 4.547 1.952 7.141"></svg:path>`,
})
export class ArcticonsHorizonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
