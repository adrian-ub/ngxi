import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmMapPinIcon],svg[charm-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.25 7c0 3.75-5.25 7.25-5.25 7.25S2.75 10.75 2.75 7a5.25 5.25 0 0 1 10.5 0"></svg:path><svg:circle cx="8" cy="7" r="1.25" fill="currentColor"></svg:circle></svg:g>`,
})
export class CharmMapPinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
