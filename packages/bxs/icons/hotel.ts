import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsHotelIcon],svg[bxs-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8" cy="11" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M18.205 7H12v8H4V6H2v14h2v-3h16v3h2v-4c0-.009-.005-.016-.005-.024H22V11c0-2.096-1.698-4-3.795-4"></svg:path>`,
})
export class BxsHotelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
