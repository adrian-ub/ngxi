import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPeacockIcon],svg[arcticons-peacock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.883 41.158v-25.34a8.976 8.976 0 1 1 17.952 0c0 3.195-1.79 6.457-4.508 7.666c-2.311 1.028-8.916 3.852-8.916 3.852"></svg:path><svg:circle cx="37.367" cy="6.706" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.367" cy="13.623" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.367" cy="20.541" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.367" cy="27.459" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.367" cy="34.377" r=".75" fill="currentColor"></svg:circle><svg:circle cx="37.367" cy="41.294" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsPeacockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
