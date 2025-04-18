import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFossifyCalendarIcon],svg[arcticons-fossify-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.532 9.567h24.936a4 4 0 0 1 4 4V38.5a4 4 0 0 1-4 4H11.532a4 4 0 0 1-4-4V13.567a4 4 0 0 1 4-4M13.715 5.5v4.068M34.14 5.5v4.068M9.731 19.89h28.36"></svg:path><svg:circle cx="15.804" cy="26.011" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="26.011" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.196" cy="26.011" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.804" cy="34.251" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="34.251" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.196" cy="34.251" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsFossifyCalendarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
