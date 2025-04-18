import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsFerrisWheelIcon],svg[majesticons-ferris-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle><svg:circle cx="19" cy="8" r="2" fill="currentColor"></svg:circle><svg:circle cx="5" cy="8" r="2" fill="currentColor"></svg:circle><svg:circle cx="5" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="19" cy="16" r="2" fill="currentColor"></svg:circle><svg:path d="m8 22l4-10l4 10"></svg:path></svg:g>`,
})
export class MajesticonsFerrisWheelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
