import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlightradar24Icon],svg[arcticons-flightradar24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="6.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.601" cy="18.911" r=".75" fill="currentColor"></svg:circle><svg:circle cx="13.851" cy="38.75" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.486" cy="35.47" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.449" cy="8.845" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24L9.102 39.5"></svg:path>`,
})
export class ArcticonsFlightradar24Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
