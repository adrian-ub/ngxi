import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxHotelIcon],svg[bx-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7.5" cy="11.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17.205 7H12a1 1 0 0 0-1 1v7H4V6H2v14h2v-3h16v3h2v-8.205A4.8 4.8 0 0 0 17.205 7M13 15V9h4.205A2.8 2.8 0 0 1 20 11.795V15z"></svg:path>`,
})
export class BxHotelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
